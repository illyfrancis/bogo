var app = app || {};
app.views = app.views || {};

app.views.Progress = Backbone.View.extend({

    template: _.template($("#tpl-report-progress").html()),

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template());
        // don't want extra outer div tag, reset the view.el
        var pane = this.$el.children("div:first").get(0);
        this.setElement(pane);

        return this;
    },

    show: function(msg) {
        console.log("Progress: showing [" + msg + "]");
        this.$el.modal();
    },

    hide: function() {
        console.log("Progress: hide");
        this.$el.modal("hide");
    }
});