/*global define*/
define([
    "jquery",
    "underscore",
    "backbone",
    "views/BogoAppMenu",
    "views/FilterStatusBar",
    "views/ReportSettings",
    "views/SearchFilters",
    "views/SearchContent"
], function ($, _, Backbone, AppMenu, FilterStatusBar, ReportSettings, SearchFilters, SearchContent) {

    var ViewManager = {

        views: [],

        appMenu: function (searchCriteria) {
            /*
            var appMenu = this._findView("appMenu");
            if (appMenu not found) {
                appMenu = new AppMenu({
                    collection: searchCriteria
                });
                this.views.push({
                    name: "appMenu",
                    view: appMenu
                })
            }
            return appMenu;
            */
            // nav (menu) bar
            return new AppMenu({
                collection: searchCriteria
            });
        },

        filterStatusBar: function (searchCriteria) {
            return new FilterStatusBar({
                collection: searchCriteria
            });
        },

        reportSettings: function (reportSchema) {
            return new ReportSettings({
                collection: reportSchema
            });
        },

        searchFilters: function (searchCriteria) {
            return new SearchFilters({
                collection: searchCriteria
            });
        },

        searchContent: function (reportSchema, searchCriteria) {
            return new SearchContent({
                reportSchema: reportSchema,
                searchCriteria: searchCriteria
            });
        },

        _findView: function (name) {
            var found = _.find(this.views, function (view) {
                return view.name === name;
            });
            if (found) {
                found = found.view; // the view obj
            }
            return found;
        },

        _addView: function (name, view) {
            this.views.push({
                name: name,
                view: view
            });
        }
    };

    return ViewManager;

});