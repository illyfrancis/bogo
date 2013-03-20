define([
    "jquery",
    "underscore",
    "backbone",
    "events/EventBus",
    "collections/ReportSchema",
    "collections/SearchCriteria",
    "views/ViewManager"
], function ($, _, Backbone, EventBus, ReportSchema, SearchCriteria, ViewManager) {

    var BogoApp = Backbone.View.extend({

        el: "body",

        initialize: function () {

            this.loadReportSchema();
            this.loadSearchCriteria();

            // if the viewManager doesn't really manage the view, what's the point? TODO - refactor viewManager
            // var viewManager = new ViewManager();

            ViewManager.appMenu(this.searchCriteria);
            this.reportSettings = ViewManager.reportSettings(this.reportSchema);
            this.filterStatusBar = ViewManager.filterStatusBar(this.searchCriteria);
            this.searchFilters = ViewManager.searchFilters(this.searchCriteria);
            this.searchContent = ViewManager.searchContent(this.reportSchema, this.searchCriteria);

            this.registerEvents();
        },

        registerEvents: function () {
            EventBus.on("startSearch", this.doSearch, this);
            EventBus.on("showReportSettings", this.showReportSettings, this);
            EventBus.on("showFilters", this.showFilters, this);
        },

        loadReportSchema: function () {
            var self = this;
            this.reportSchema = new ReportSchema();
            this.reportSchema.url = "/api/reportschema";
            this.reportSchema.fetch({
                success: function () {
                    // need to assume that the position is already determined - but let's just do that here for now.
                    var position = 0;
                    self.reportSchema.each(function (reportColumn) {
                        reportColumn.set("position", ++position);
                    });
                },
                error: function () {
                    console.log("Cannot fetch reportschema");
                }
            });
            // this.reportSchema.reset(response.reportSchema.values);
        },

        loadSearchCriteria: function () {
            this.searchCriteria = new SearchCriteria();
            this.searchCriteria.reset([{
                name: "AccountCriteria",
                title: "Account",
                isApplied: true,
                restrictions: {
                    accountNumbers: ["0015594","0067173","0067249"]
                }
            }, {
                name: "TransactionTypeCriteria",
                title: "Transaction Types",
                isApplied: false,
                restrictions: {
                    types: ["DVW","RVP","REC"],
                    id: "TR001"
                }
            }, {
                name: "SecurityIdCriteria",
                title: "Security ID",
                isApplied: false,
                restrictions: {
                }
            }, {
                name: "SecurityCategoryCriteria",
                title: "Security Category",
                isApplied: false,
                restrictions: {
                }
            }, {
                name: "SettlementDateCriteria",
                title: "Settlement Date",
                isApplied: false,
                restrictions: {
                }
            }, {
                name: "SettlementLocationCriteria",
                title: "Settlement Location",
                isApplied: false,
                restrictions: {
                }
            }], {
                parse: true
            }); // for forcing the parse in the model
        },

        render: function () {
            console.log("BogoApp:render");
            this.$el.append(this.filterStatusBar.render().el);
            this.$el.append(this.searchContent.el); // nothing to render
            this.$el.append(this.reportSettings.render().el);
            this.$el.append(this.searchFilters.el); // - already rendered in initilize of searchfilters
        },

        doSearch: function () {
            console.log("doSearch");
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