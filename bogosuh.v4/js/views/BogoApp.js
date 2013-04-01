define([
    'jquery',
    'underscore',
    'backbone',
    'events/EventBus',
    'events/Repository',
    'collections/SearchCriteria',
    'views/ViewManager'
], function ($, _, Backbone, EventBus, Repository, SearchCriteria, ViewManager) {

    var BogoApp = Backbone.View.extend({

        el: 'body',

        initialize: function () {
            EventBus.on('showReportSettings', this.showReportSettings, this);
            EventBus.on('showFilters', this.showFilters, this);
            EventBus.on('startSearch', this.doSearch, this);

            this.searchCriteria = new SearchCriteria();
        },

        load: function () {
            Repository.loadAll(this.render);
        },

        render: function () {
            var reportSchema = Repository.reportSchema;

            // create views
            this.appMenu = ViewManager.appMenu(this.searchCriteria);
            this.reportSettings = ViewManager.reportSettings(reportSchema);
            this.filterStatusBar = ViewManager.filterStatusBar(this.searchCriteria);
            this.searchFilters = ViewManager.searchFilters(this.searchCriteria);
            this.searchContent = ViewManager.searchContent(reportSchema, this.searchCriteria);

            console.log('BogoApp:render');
            this.$el.append(this.appMenu.render().el);
            this.$el.append(this.filterStatusBar.render().el);
            this.$el.append(this.searchContent.el); // nothing to render
            this.$el.append(this.reportSettings.render().el);
            this.$el.append(this.searchFilters.render().el); // - already rendered in initilize of searchfilters
        },

        doSearch: function () {
            console.log('doSearch');
            this.searchContent.execute();
        },

        showFilters: function (e) {
            this.searchFilters.show(e);
        },

        showReportSettings: function () {
            this.reportSettings.show();
        }
    });

    return BogoApp;

});