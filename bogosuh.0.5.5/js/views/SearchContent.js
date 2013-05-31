define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'views/TransactionReport',
    'views/TransactionPaginator'
], function (_, Backbone, EventBus, Repository, TransactionReport, TransactionPaginator) {

    var SearchContent = Backbone.View.extend({

        tagName: 'div',

        className: 'search-content container-fluid',

        initialize: function (options) {
            // no model or collection
            this.reportSchema = options.reportSchema;
            this.searchCriteria = options.searchCriteria;
            this.transactions = Repository.transactionReport();

            this.listenTo(EventBus, 'search', this.show);
            this.listenTo(EventBus, 'filter:change', this.hide);
            this.listenTo(this.searchCriteria, 'change remove', this.hide);
        },

        render: function () {
            // this.hide();
            this.disposeSubViews();
            this.$el.empty();
            this.appendTransactionReport();
            this.appendPaginator();
            return this;
        },

        appendTransactionReport: function () {
            var transactionReport = this.createSubView(TransactionReport, {
                collection: this.transactions,
                reportSchema: this.reportSchema,
                searchCriteria: this.searchCriteria
            });
            this.$el.append(transactionReport.render().el);
        },

        appendPaginator: function () {
            var pago = this.createSubView(TransactionPaginator, {
                collection: this.transactions
            });
            this.$el.append(pago.render().el);
        },

        show: function () {
            this.$el.show();
        },

        hide: function () {
            this.$el.hide();
        }

    });

    return SearchContent;

});