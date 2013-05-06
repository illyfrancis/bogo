define([
    'backbone',
    'underscore',
    'apps/Repository',
    'models/Query'
], function (Backbone, _, Repository, Query) {

    var TransactionQuery = function () {
        this.initialize();
    };

    _.extend(TransactionQuery.prototype, {
        initialize: function () {
            // initialize query object with callbacks
            this.query = new Query({}, {
                searchUrl: '/api/transactions/search',
                success: this.querySuccess,
                error: this.queryError
            });
        },

        execute: function (offset) {
            var searchCriteria = Repository.searchCriteria(),
                reportSchema = Repository.reportSchema();

            this.query.set({
                criteria: searchCriteria.queryCriteria(),
                fields: reportSchema.queryFields(),
                sort: reportSchema.querySort()
            });
            this.query.execute(offset);
        },

        next: function () {
            this.query.next();
        },

        previous: function () {
            this.query.previous();
        },

        querySuccess: function (query, response, options) {
            var transactionReport = Repository.transactionReport();
            transactionReport.pageInfo(query.limit, query.offset);
            transactionReport.reset(response, {parse: true});
        },

        queryError: function () {
            // TODO
        }

    });

    return TransactionQuery;

});