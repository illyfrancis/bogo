define([
    "jquery",
    "underscore",
    "backbone",
    "bootstrap",
    "apps/EventBus",
    "views/ReportColumnSelector",
    "text!templates/ReportSettings.html"
], function ($, _, Backbone, Bootstrap, EventBus, ReportColumnSelector, tpl) {

    var ReportSettings = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            "click .search-report": "searchReport"
        },

        initialize: function () {
            // collection = ReportSchema
            this.reportColumnSelector = new ReportColumnSelector({
                collection: this.collection
            });
        },

        render: function () {
            console.log("rendering ReportSettings");
            this.$el.html(this.template());

            // don't want extra outer div tag, reset the view.el
            var pane = this.$el.children("div:first").get(0);
            this.setElement(pane);

            this.renderReportColumnSelector();
            return this;
        },

        renderReportColumnSelector: function () {
            this.$(".modal-body div").append(
                this.reportColumnSelector.render().el);
        },

        show: function () {
            this.$el.modal();
        },

        hide: function () {
            this.$el.modal("hide");
        },

        searchReport: function () {
            // need to validate
            // if (this.collection.isReadyForSearch()) {
            this.hide();
            EventBus.trigger("startSearch");
        }
    });

    return ReportSettings;

});