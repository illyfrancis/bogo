define([
    'jquery',
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'collections/SearchCriteria',
    'views/ViewFactory',
    'views/PreferenceDropdown'
], function ($, _, Backbone, EventBus, Repository, SearchCriteria, ViewFactory, PreferenceDropdown) {

    var BogoApp = Backbone.View.extend({

        el: 'body',

        initialize: function () {
            EventBus.on('showReportSettings', this.showReportSettings, this);
            EventBus.on('showFilters', this.showFilters, this);
            EventBus.on('startSearch', this.doSearch, this);
            EventBus.on('loadPreference', this.doPreference, this);

            this.searchCriteria = new SearchCriteria();
        },

        load: function () {
            Repository.loadAll(this.render, this);
        },

        render: function () {
            var reportSchema = Repository.reportSchema;

            // create views
            this.appMenu = ViewFactory.createAppMenu(this.searchCriteria);
            this.reportSettings = ViewFactory.createReportSettings(reportSchema);
            this.filterStatusBar = ViewFactory.createFilterStatusBar(this.searchCriteria);
            this.searchFilters = ViewFactory.createSearchFilters(this.searchCriteria);
            this.searchContent = ViewFactory.createSearchContent(reportSchema, this.searchCriteria);

            console.log('BogoApp:render');
            this.$el.append(this.appMenu.render().el);
            this.$el.append(this.filterStatusBar.render().el);
            this.$el.append(this.reportSettings.render().el);
            this.$el.append(this.searchFilters.render().el);
            this.$el.append(this.searchContent.el); // nothing to render

            // foo
            var preferenceDropdown = new PreferenceDropdown();
            this.$el.append(preferenceDropdown.render().el);
        },

        showFilters: function (criterionName) {
            this.searchFilters.show(criterionName);
        },

        showReportSettings: function () {
            this.reportSettings.show();
        },

        doSearch: function () {
            console.log('doSearch');
            this.searchContent.execute();
        },

        doPreference: function () {
            Repository.loadPreference(this.searchCriteria.hydrate, this.searchCriteria);
        },

        savePreference: function () {
            // TODO - think about this one
            this.searchCriteria.preserve();
        }

    });

    return BogoApp;

});