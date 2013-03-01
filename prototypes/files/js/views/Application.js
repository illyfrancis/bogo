define([
    "jquery",
    "underscore",
    "backbone"
], function ($, _, Backbone) {

    return Backbone.View.extend({

        tagName: "li",

        template: _.template("<%= 'a9' %><i class='icon-ok'></i>"),

        initialize: function () {
            // model = answers
        },

        render: function () {
            console.log("Application: render()");
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

});