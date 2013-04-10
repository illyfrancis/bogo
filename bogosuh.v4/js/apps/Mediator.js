define([
    'backbone',
    'underscore',
    'apps/Repository',
    'models/Preference'
], function (Backbone, _, Repository, Preference) {

/*    var TransactionReport = Backbone.Collection.extend({

        model: TransactionRecord,

        setQuery: function () {

        }
    });

    var definePreferenceLifecycle = {

    };*/

    // Mediator or Controller, not sure yet.
    // if mediator, should it be merged with EvantBus? - I don't think so but worth considering.

    var Mediator = function(eventBus) {
        this.initialize(eventBus);
    };

    _.extend(Mediator.prototype, Backbone.Events, {

        // wrap initialize with 'once'
        initialize: _.once(function(eventBus) {
            console.log('Mediator::initialize');
            this.listenTo(eventBus, 'loadPreference', this.applyPreference);
            this.listenTo(eventBus, 'savePreference', this.savePreference);
            this.listenTo(eventBus, 'clearPreference', this.clearPreference);

        }),

        searchReport: function () {
            // something triggers 'startSearch' event, then...

            // 1. should validation occur here or before event gets kicked off?
            // 2. assuming everything is in order do proceding.

            // 3. make search query from (potential SearchQuery object? or TransactionReport.setQuery?)
            //    a) gather query from searchCriteria (owned by BogoApp but should Repository manage it?)
            //    b) gether sort order & fields selection from reportSchema (owned by Repository)
            var searchCriteria = Repository.searchCriteria;
            var reportSchema = Repository.reportSchema;
            var transactionReport = new TransactionReport();    // who owns it? should it be the content view who creates it???
            transactionReport.setQuery(searchCriteria, reportSchema);

            // 4. kick of search/fetch of transaction report
            var callback = function () {};
            Repository.searchReport(callback);

            // 5. where 'callback' is something like
            callback = function () {
                // on success,
                // EventBus.trigger('report:loaded')
                // but !!!! remember that when the collection is loaded it does trigger 'change/reset' etc events it self,
                // on which the view can listen to, so this might be redundant... except maybe for error handling.

                // on error, do error handling
            };
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
        }

        // what about delete preference? are we defining preference maint screen here?? seems wrong!

    });

    return Mediator;
});