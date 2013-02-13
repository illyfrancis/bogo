define([
    "jquery",
    "underscore",
    "backbone",
    "text!templates/SearchFilterSelector.html"
], function ($, _, Backbone, tpl) {

    var SearchFilterSelector = Backbone.View.extend({

        tagName: "li",

        template: _.template(tpl),

        events: {
            "click": "select"
        },

        initialize: function () {
            // model = ReportCriteria
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        select: function () {
            this.$el.trigger("change", this.model.cid);
        }

    });

    return SearchFilterSelector;
});