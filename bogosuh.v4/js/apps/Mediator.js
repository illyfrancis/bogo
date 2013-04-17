define([
    'backbone',
    'underscore',
    'apps/Repository',
    'models/Preference',
    'models/Query'
], function (Backbone, _, Repository, Preference, Query) {

    // Mediator or Controller, not sure yet.
    // if mediator, should it be merged with EvantBus? - I don't think so but worth considering.

    var Mediator = function(eventBus) {
        this.initialize(eventBus);
    };

    _.extend(Mediator.prototype, Backbone.Events, {

        // make sure called once only
        initialize: _.once(function(eventBus) {
            console.log('Mediator::initialize');
            this.listenTo(eventBus, 'loadPreference', this.applyPreference);
            this.listenTo(eventBus, 'savePreference', this.savePreference);
            this.listenTo(eventBus, 'clearPreference', this.clearPreference);
            this.listenTo(eventBus, 'resetReportSchema', this.resetReportSchema);

            // tempor
            this.listenTo(eventBus, 'startSearch', this.searchReport);

            this.query = new Query({}, {
                success: this.onSearchSuccess,
                error: this.onSearchError
            });
            this.listenTo(eventBus, 'next', this.searchNext);
            this.listenTo(eventBus, 'previous', this.searchPrevious);
        }),

        _searchReport: function (page) {
            // 1. should validation occur here or before event gets kicked off?
            // 2. assuming everything is in order do proceding.

            var searchCriteria = Repository.searchCriteria(),
                reportSchema = Repository.reportSchema();
            
            var query = new Query({
                criteria: searchCriteria.queryCriteria(),
                fields: reportSchema.queryFields(),
                sort: reportSchema.querySort()
            }, {
                success: this.onSearchSuccess,
                error: this.onSearchError
            });

            query.execute(page);
        },

        searchReport: function (page) {
            // 1. should validation occur here or before event gets kicked off?
            // 2. assuming everything is in order do proceding.

            var searchCriteria = Repository.searchCriteria(),
                reportSchema = Repository.reportSchema();
            
            this.query.set({
                criteria: searchCriteria.queryCriteria(),
                fields: reportSchema.queryFields(),
                sort: reportSchema.querySort()
            });

            this.query.execute(page);
        },


        // TRY THIS!!
        searchNext: function () {
            this.query.next();
        },

        searchPrevious: function () {
            this.query.previous();
        },

        onSearchSuccess: function (query, response, options) {
            var transactionReport = Repository.transactionReport();
            transactionReport.pageInfo(query.limit, query.offset);
            transactionReport.reset(response, {parse: true});
        },

        onSearchError: function () {
            // TODO
        },

        applyPreference: function (id) {

            if (_.isUndefined(id)) {
                id = 'none';
            }

            Repository.getPreference(id, this.parsePreference, this);
        },

        parsePreference: function (preference) {

            var data = JSON.parse(preference.get('values'));

            var searchCriteria = Repository.searchCriteria(),
                reportSchema = Repository.reportSchema();

            searchCriteria.hydrate(data.criteria);
            reportSchema.hydrate(data.schema);
        },

        savePreference: function (id) {
            // take current snapshot
            console.log("Mediator: savePreference");

            // need access to searchCriteria & reportSchema. Let's assume Repository is defined and provided.
            var searchCriteria = Repository.searchCriteria(),
                reportSchema = Repository.reportSchema();

            var criteria = searchCriteria.preserve();
            var schema = reportSchema.preserve();
            var data = {
                criteria: criteria.criteria,    // review this, maybe drop 'criteria' from return value and just return array.
                schema: schema.schema
            };

            var preference = {};
            if (id) {
                var preferences = Repository.preferences();
                preference = preferences.get(id);
            } else {
                preference = new Preference();
            }

            preference.set({
                name: 'pref:' + (new Date()).getTime(),
                values: JSON.stringify(data)
            });

            // somehow concat and turn into preference.
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