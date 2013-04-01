define([
    "jquery",
    "underscore",
    "backbone",
    "text!templates/FilterSelectorOption.html"
], function ($, _, Backbone, tpl) {

    var FilterSelectorOption = Backbone.View.extend({

        tagName: "li",

        template: _.template(tpl),

        events: {
            "click": "select"
        },

        initialize: function () {
            // model = Criterion
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        select: function () {
            this.$el.trigger("select", this.model.cid);
        }

    });

    return FilterSelectorOption;
});