/*global define*/
define([
    "jquery",
    "underscore",
    "backbone",
    "views/AppMenu",
    "views/FilterStatusBar",
    "views/ReportSettings",
    "views/SearchFilters",
    "views/SearchContent"
], function ($, _, Backbone, AppMenu, FilterStatusBar, ReportSettings, SearchFilters, SearchContent) {

    var ViewFactory = {

        createAppMenu: function (searchCriteria) {
            // nav (menu) bar
            return new AppMenu({
                collection: searchCriteria
            });
        },

        createFilterStatusBar: function (searchCriteria) {
            return new FilterStatusBar({
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