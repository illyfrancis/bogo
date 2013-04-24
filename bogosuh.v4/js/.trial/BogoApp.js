define([
    'jquery',
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'collections/SearchCriteria',
    'views/ViewFactory',
    'treeview/TreeRoot'
], function ($, _, Backbone, EventBus, Repository, SearchCriteria, ViewFactory, TreeRoot) {

    var BogoApp = Backbone.View.extend({

        el: 'body',

        initialize: function () {
            this.listenTo(EventBus, 'showReportSettings', this.showReportSettings);
            this.listenTo(EventBus, 'showFilters', this.showFilters);
        },

        load: function () {
            Repository.loadAll(this.render, this);
        },

        render: function () {
            var reportSchema = Repository.reportSchema(),
                searchCriteria = Repository.searchCriteria();

            // create views
            this.appMenu = ViewFactory.createAppMenu(searchCriteria);
            this.reportSettings = ViewFactory.createReportSettings(reportSchema);
            this.filterStatusBar = ViewFactory.createFilterStatusBar(searchCriteria);
            this.searchFilters = ViewFactory.createSearchFilters(searchCriteria);
            this.searchContent = ViewFactory.createSearchContent(reportSchema, searchCriteria);

            this.$el.append(this.appMenu.render().el);
            this.$el.append(this.filterStatusBar.render().el);
            this.$el.append(this.reportSettings.render().el);
            this.$el.append(this.searchFilters.render().el);
            this.$el.append(this.searchContent.render().el);

            this.transactionType();

            return this;
        },

        showFilters: function (criterionName) {
            this.searchFilters.show(criterionName);
        },

        showReportSettings: function () {
            this.reportSettings.show();
        },

        transactionType: function () {
            var transactionTypes = Repository.transactionTypesWithRoots;
            var root = new TreeRoot({model: transactionTypes});
            this.$el.append(root.render().el);
        }

    });

    return BogoApp;

});