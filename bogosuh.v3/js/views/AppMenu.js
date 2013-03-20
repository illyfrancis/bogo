define([
    "jquery",
    "underscore",
    "backbone",
    "events/EventBus",
    "text!templates/AppMenu.html"
], function ($, _, Backbone, EventBus, tpl) {

    var AppMenu = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            "click .report-search:not('.disabled')": "reportSearch",
            "click .report-settings:not('.disabled')": "reportSettings",
            "click .add-filters": "showFilters"
        },

        initialize: function () {
            // collection is SearchCriteria
            this.listenTo(this.collection, "change:isApplied", this.toggleSearchButton);
        },

        render: function () {
            this.$el.empty();
            this.$el.html(this.template());

            return this;
        },

        reportSearch: function () {
            console.log("report search");
            EventBus.trigger("startSearch");
        },

        reportSettings: function () {
            console.log("report settings");
            EventBus.trigger("showReportSettings");
        },

        showFilters: function () {
            EventBus.trigger("showFilters");
        },

        toggleSearchButton: function () {
            this.$(".report-search").toggleClass("disabled", !this.collection.isReadyForSearch());
        }

    });

    return AppMenu;

});