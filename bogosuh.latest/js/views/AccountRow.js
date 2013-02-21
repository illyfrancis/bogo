define([
    "jquery",
    "underscore",
    "backbone",
    "text!templates/AccountRow.html"
], function ($, _, Backbone, tpl) {

    var AccountRow = Backbone.View.extend({

        tagName: "tr",

        template: _.template(tpl),

        events: {
            "click": "toggle"
        },

        initialize: function () {
            // this.model.on("change", this.render, this);
            this.listenTo(this.model, "change", this.render);
        },

        render: function () {
            console.log("AccountRow: render");

            this.stopListening();
            this.$el.empty(); // needed?
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        updateSelection: function (checked) {
            this.model.select(checked);
        },

        toggle: function () {
            this.model.toggle();
            // this.model.set("selected", !this.model.get("selected"), {silent: true});
            // this.$('i').toggleClass('icon-ok');
        },

        // dispose
        dispose: function () {
            this.remove();
            this.off();
            this.model.off("change", this.render);
        }
    });

    return AccountRow;

});