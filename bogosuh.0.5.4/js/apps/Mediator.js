define([
    'backbone',
    'underscore',
    'apps/Repository',
    'apps/TransactionQuery',
    'models/Preference'
], function (Backbone, _, Repository, TransactionQuery, Preference) {

    var Mediator = function (eventBus) {
        this.initialize(eventBus);
    };

    _.extend(Mediator.prototype, Backbone.Events, {

        // make sure called only once
        initialize: _.once(function(eventBus) {
            // preferences
            this.listenTo(eventBus, 'loadPreference', this.applyPreference);
            this.listenTo(eventBus, 'savePreference', this.savePreference);
            this.listenTo(eventBus, 'clearPreference', this.clearPreference);
            this.listenTo(eventBus, 'resetReportSchema', this.resetReportSchema);

            // report searches
            this.listenTo(eventBus, 'search', this.search);
            this.listenTo(eventBus, 'searchNext', this.searchNext);
            this.listenTo(eventBus, 'searchPrevious', this.searchPrevious);

            this.transactionQuery = new TransactionQuery();
        }),

        search: function (page) {
            // 1. should validation occur here or before event gets kicked off?
            // 2. assuming everything is in order do proceding.

            var offset = page - 1;
            this.transactionQuery.execute(offset);
        },

        searchNext: function () {
            this.transactionQuery.next();
        },

        searchPrevious: function () {
            this.transactionQuery.previous();
        },

        applyPreference: function (id) {
            if (_.isUndefined(id)) {
                // TODO - error
            } else {
                Repository.getPreference(id, this._hydrate, this);
            }
        },

        _hydrate: function (preference) {
            // fetched successfully, can select this one in the dropdown
            var preferences = Repository.preferences();
            preferences.select(preference);

            var data = JSON.parse(preference.get('values')),
                searchCriteria = Repository.searchCriteria(),
                reportSchema = Repository.reportSchema();

            searchCriteria.hydrate(data.criteria);
            reportSchema.hydrate(data.schema);
        },

        savePreference: function (preference) {
            var searchCriteria = Repository.searchCriteria(),
                reportSchema = Repository.reportSchema();

            preference.set({
                values: JSON.stringify({
                    criteria: searchCriteria.preserve(),
                    schema: reportSchema.preserve()
                })
            });

            Repository.savePreference(preference);
        },

        clearPreference: function () {
            var searchCriteria = Repository.searchCriteria();
            searchCriteria.reset();

            this.resetReportSchema();
        },

        resetReportSchema: function () {
            // reload report schema
            Repository.loadReportSchema();
        }

    });

    return Mediator;
});