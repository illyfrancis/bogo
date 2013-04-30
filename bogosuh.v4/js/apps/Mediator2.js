define([
    'backbone',
    'underscore',
    'apps/Repository',
    'apps/TransactionQuery',
    'apps/Conservator',
    'models/Preference'
], function (Backbone, _, Repository, TransactionQuery, Conservator, Preference) {

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
            this.conservator = new Conservator();
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

        applyPreference: function (preferenceId) {
            if (!_.isUndefined(preferenceId)) {
                Repository.getPreference(id, this.conservator.hydrate, this);
            }
        },

        parsePreference: function (preference) {
            // fetched successfully, can select this one in the dropdown
            var preferences = Repository.preferences();
            preferences.select(preference);

            var data = JSON.parse(preference.get('values'));

            var searchCriteria = Repository.searchCriteria(),
                reportSchema = Repository.reportSchema();

            searchCriteria.hydrate(data.criteria);
            reportSchema.hydrate(data.schema);
        },

        savePreference: function (preference) {
            // take current snapshot
            console.log("Mediator: savePreference");

            // need access to searchCriteria & reportSchema. Let's assume Repository is defined and provided.
            var searchCriteria = Repository.searchCriteria(),
                reportSchema = Repository.reportSchema();

            this.conservator.preserve(preference, searchCriteria, reportSchema);
            Repository.savePreference(preference);

        },

        clearPreference: function () {
            var searchCriteria = Repository.searchCriteria();
            searchCriteria.reset();

            this.resetReportSchema();
        },

        // what about delete preference? are we defining preference maint screen here?? seems wrong!

        resetReportSchema: function () {
            // reload report schema
            Repository.loadReportSchema();
        }

    });

    return Mediator;
});