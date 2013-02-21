define(["jquery", "underscore", "backbone"], function ($, _, Backbone) {

    var BogoAppMenu = Backbone.View.extend({

        el: ".navbar",

        events: {
            "click .report-search:not('.disabled')": "reportSearch",
            "click .report-settings:not('.disabled')": "reportSettings",
            "click .add-filters": "showFilters"
        },

        initialize: function () {
            // collection is SearchCriteria
            this.collection.on("change:isApplied", this.render, this);
            this.render();
        },

        reportSearch: function () {
            console.log("report search");
            app.EventBus.trigger("startSearch");
        },

        reportSettings: function () {
            console.log("report settings");
            app.EventBus.trigger("showReportSettings");
        },

        showFilters: function () {
            app.EventBus.trigger("showFilters");
        },

        render: function () {
            console.log("render menu to update button state");
            this.$el.find(".report-search").toggleClass("disabled", !this.collection.isReadyForSearch());

            return this;
        }

    });

    return BogoAppMenu;

});