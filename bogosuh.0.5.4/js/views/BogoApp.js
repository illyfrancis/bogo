define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'views/ViewFactory'
], function (_, Backbone, EventBus, Repository, ViewFactory) {

    var BogoApp = Backbone.View.extend({

        el: 'body',

        load: function () {
            Repository.loadAll(this.render, this);
        },

        render: function () {
            var reportSchema = Repository.reportSchema(),
                searchCriteria = Repository.searchCriteria();

            // create views
            var appMenu = ViewFactory.createAppMenu(searchCriteria),
                searchMenu = ViewFactory.createSearchMenu(searchCriteria),
                reportSettings = ViewFactory.createReportSettings(reportSchema, searchCriteria),
                searchFilters = ViewFactory.createSearchFilters(searchCriteria),
                searchContent = ViewFactory.createSearchContent(reportSchema, searchCriteria);

            this.$el.append(appMenu.render().el);
            this.$el.append(searchMenu.render().el);
            this.$el.append(reportSettings.render().el);
            this.$el.append(searchFilters.render().el);
            this.$el.append(searchContent.render().el);

            return this;
        }

    });

    return BogoApp;

});