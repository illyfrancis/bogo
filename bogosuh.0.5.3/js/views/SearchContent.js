define([
    'underscore',
    'backbone',
    'apps/Repository',
    'collections/TransactionReport',
    'views/SearchResult'
], function (_, Backbone, Repository, TransactionReport, SearchResult) {

    var SearchContent = Backbone.View.extend({

        tagName: 'div',

        className: 'search-content container-fluid',

        initialize: function (options) {
            // no model or collection
            this.reportSchema = options.reportSchema;
            this.searchCriteria = options.searchCriteria;
        },

        render: function () {
            this.report = Repository.transactionReport();
            this.renderReport();
            return this;
        },

        renderReport: function () {
            // temporary
            this.disposeSubViews();
            
            console.log('> SearchContent: renderReport');
            var searchResult = this.createSubView(SearchResult, {
                collection: this.report,
                reportSchema: this.reportSchema,
                searchCriteria: this.searchCriteria
            });
            this.$el.empty().append(searchResult.render().el);
        }

    });

    return SearchContent;

});