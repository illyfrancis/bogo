define([
    'backbone',
    'underscore',
    'apps/EventBus',
    'apps/Repository'
], function (Backbone, _, EventBus, Repository) {

    // Mediator or Controller, not sure yet.
    // if mediator, should it be merged with EvantBus? - I don't think so but worth considering.

    var Mediator = {

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

        applyPreference: function () {
            // let's assume it applies the latest one.
            // but it may take an id as input

            // reset!!!
        },

        savePreference: function () {
            // take current snapshot
        }

        // what about delete preference? are we defining preference maint screen here?? seems wrong!
    };

    return Mediator;
    
});


var TransactionReport = Backbone.Collection.extend({

    model: TransactionRecord,

    setQuery: function () {

    }
});

var definePreferenceLifecycle = {

};