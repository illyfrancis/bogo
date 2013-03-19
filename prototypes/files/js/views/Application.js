define([
    "jquery",
    "underscore",
    "backbone"
], function ($, _, Backbone) {

    return Backbone.View.extend({

        tagName: "li",

        // template: _.template("<button class='btn'><%=c9%></button>"),
        template: _.template("<span class='label'><%=c9%></span>"),

        initialize: function () {
            // model = answers
        },

        render: function () {
            console.log("Application: render()");
            this.$el.html(this.template(this.model.toJSON()));
            // this.$("button").addClass(this.mapTierToClass());
            this.$("span").addClass(this.mapTierToLabelClass());
            return this;
        },

        mapTierToClass: function () {
            var tier = this.model.getTier();
            if (tier.indexOf("Tier 1") === 0) {
                return "btn-danger";
            } else if (tier.indexOf("Tier 2") === 0) {
                return "btn-warning";
            } else if (tier.indexOf("Tier 3") === 0) {
                return "btn-success";
            } else if (tier.indexOf("Tier 4") === 0) {
                return "btn-info";
            }
        },

        mapTierToLabelClass: function () {
            var tier = this.model.getTier();
            if (tier.indexOf("Tier 1") === 0) {
                return "label-important";
            } else if (tier.indexOf("Tier 2") === 0) {
                return "label-warning";
            } else if (tier.indexOf("Tier 3") === 0) {
                return "label-success";
            } else if (tier.indexOf("Tier 4") === 0) {
                return "label-info";
            }
        }
    });

});