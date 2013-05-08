define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'collections/TransactionReport',
    'views/SearchResult'
], function (_, Backbone, EventBus, Repository, TransactionReport, SearchResult) {

    var SearchContent = Backbone.View.extend({

        tagName: 'div',

        className: 'search-content container-fluid',

        initialize: function (options) {
            // no model or collection
            this.reportSchema = options.reportSchema;
            this.searchCriteria = options.searchCriteria;

            this.listenTo(EventBus, 'search', this.show);
            this.listenTo(EventBus, 'filter:change', this.hide);
            this.listenTo(this.searchCriteria, 'change remove', this.hide);
        },

        render: function () {
            // this.hide();
            this.disposeSubViews();
            var searchResult = this.createSubView(SearchResult, {
                reportSchema: this.reportSchema,
                searchCriteria: this.searchCriteria
            });
            this.$el.empty().append(searchResult.render().el);
            return this;
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