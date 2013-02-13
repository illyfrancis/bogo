var app = app || {};
app.views = app.views || {};

app.views.ReportSettings = Backbone.View.extend({

    template: _.template($("#tpl-report-settings").html()),

    events: {
        "click .search-report": "searchReport"
    },

    initialize: function() {
        // should it be?
        // app.EventBus.on("showReportSettings", this.show, this);
        
        this.reportColumnSelector = new app.views.ReportColumnSelector({
            collection: app.data.reportSchema
        });
    },

    render: function() {
        console.log("rendering ReportSettings");
        this.$el.html(this.template());

        // don't want extra outer div tag, reset the view.el
        var pane = this.$el.children("div:first").get(0);
        this.setElement(pane);

        this.renderReportColumnSelector();
        return this;
    },

    renderReportColumnSelector: function() {
        this.$el.find(".modal-body div").append(
            this.reportColumnSelector.render().el);
    },

    show: function() {
        this.$el.modal();
    },

    hide: function() {
        this.$el.modal("hide");
    },

    searchReport: function() {
        // need to validate
        // if (this.collection.isReadyForSearch()) {
        this.hide();
        app.EventBus.trigger("startSearch");
    }
});
