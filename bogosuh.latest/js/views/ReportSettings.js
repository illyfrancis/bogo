define([
    "jquery",
    "underscore",
    "backbone",
    "bootstrap",
    "views/ReportColumnSelector",
    "text!templates/ReportSettings.html"
], function ($, _, Backbone, Bootstrap, ReportColumnSelector, tpl) {

    var ReportSettings = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            "click .search-report": "searchReport"
        },

        initialize: function () {
            // collection = ReportSchema
            // should it be?
            // app.EventBus.on("showReportSettings", this.show, this);
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
            this.$el.find(".modal-body div").append(
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
            app.EventBus.trigger("startSearch");
        }
    });

    return ReportSettings;

});