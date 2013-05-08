define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'collections/SearchCriteria',
    'views/ViewFactory',
    'views/PreferencePopup'
], function (_, Backbone, EventBus, Repository, SearchCriteria, ViewFactory, PreferencePopup) {

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
            this.searchMenu = ViewFactory.createSearchMenu(searchCriteria);
            this.reportSettings = ViewFactory.createReportSettings(reportSchema, searchCriteria);
            this.searchFilters = ViewFactory.createSearchFilters(searchCriteria);
            var searchContent = ViewFactory.createSearchContent(reportSchema, searchCriteria);

            this.$el.append(this.appMenu.render().el);
            this.$el.append(this.searchMenu.render().el);
            this.$el.append(this.reportSettings.render().el);
            this.$el.append(this.searchFilters.render().el);
            this.$el.append(searchContent.render().el);

            // TODO - move this to somewehre more approp.
            var preferencePopup = this.createSubView(PreferencePopup);
            this.$el.append(preferencePopup.render().el);

            return this;
        },

        showFilters: function (criterionName) {
            this.searchFilters.show(criterionName);
        },

        showReportSettings: function () {
            this.reportSettings.show();
        }

    });

    return BogoApp;

});