define([
    "jquery",
    "underscore",
    "backbone",
    "text!templates/SettlementLocationFilter.html"
], function ($, _, Backbone, tpl) {

    var SettlementLocationFilter = Backbone.View.extend({

        template: _.template(tpl),

        render: function () {
            console.log("SettlementLocationFilter: render");

            this.$el.html(this.template());

            return this;
        }

    });

    return SettlementLocationFilter;
});