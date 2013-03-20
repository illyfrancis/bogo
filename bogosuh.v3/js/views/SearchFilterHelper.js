/*global define,require*/
define([
    "underscore",
    "views/AccountFilter",
    "views/DateRangeFilter",
    "views/SecurityCategoryFilter",
    "views/SecurityIdFilter",
    "views/SettlementDateFilter",
    "views/SettlementLocationFilter",
    "views/TransactionTypeFilter"
], function (_) {

    var SearchFilterHelper = {

        // cache views
        views: {},
        
        filterView: function (reportCriteria) {
            // the idea is to create a filter based on the name of reportCriteria
            // the convention is to use the name of criteria to locate and create corresponding filter view.
            // e.g. AccountCriteria -> AccountFilter
            // TransactionTypeCriteria -> TransactionTypeFilter
            var name = reportCriteria.get("name"),  // TODO - now that each XXX_Criteria has a propery "name", refactor this to be consistent
                last = name.indexOf("Criteria"),
                viewName = name.substr(0, last).concat("Filter"),
                Filter,
                view = this.views[viewName];

            console.log("> view name [" + viewName + "]");

            if (!view) {
                try {
                    Filter = require("views/" + viewName);
                    view = new Filter({
                        model: reportCriteria
                    });
                    this.views[viewName] = view;
                } catch (err) {
                    // TODO throw exception? or message or dummy view?
                    console.log("view class doesn't exist");
                    view = null;
                }
            }

            return view;
        },

        removeFilter: function (reportCriteria) {
            
            var name = reportCriteria.get("name"),  // TODO - now that each XXX_Criteria has a propery "name", refactor this to be consistent
                last = name.indexOf("Criteria"),
                viewName = name.substr(0, last).concat("Filter"),
                Filter,
                view = this.views[viewName];

            
            if (view) {
                console.log("> about to remove view [" + viewName + "]");
                view.remove();
                delete this.views[viewName];
                console.log("> done removing view [" + viewName + "]");
            }

        }
    };

    return SearchFilterHelper;

});