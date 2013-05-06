/*global define*/
define([
    'underscore',
    'backbone',
    'views/AppMenu',
    'views/SearchMenu',
    'views/FilterStatusBar',
    'views/ReportSettings',
    'views/SearchFilters',
    'views/SearchContent'
], function (_, Backbone, AppMenu, SearchMenu, FilterStatusBar, ReportSettings, SearchFilters, SearchContent) {

    var ViewFactory = {

        createAppMenu: function (searchCriteria) {
            // nav (menu) bar
            return new AppMenu({
                collection: searchCriteria
            });
        },

        createSearchMenu: function (searchCriteria) {
            // search menu
            return new SearchMenu({
                collection: searchCriteria
            });
        },

        createReportSettings: function (reportSchema) {
            return new ReportSettings({
                collection: reportSchema
            });
        },

        createSearchFilters: function (searchCriteria) {
            return new SearchFilters({
                collection: searchCriteria
            });
        },

        createSearchContent: function (reportSchema, searchCriteria) {
            return new SearchContent({
                reportSchema: reportSchema,
                searchCriteria: searchCriteria
            });
        }

    };

    return ViewFactory;

});