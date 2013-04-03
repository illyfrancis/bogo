define([
    "jquery",
    "underscore",
    "backbone",
    "views/DateRangeFilter",
    "text!templates/SettlementDateFilter.html"
], function ($, _, Backbone, DateRangeFilter, tpl) {

    var SettlementDateFilter = Backbone.View.extend({

        template: _.template(tpl),
        // or generic date template?

        initialize: function () {
            // model = SettlementDateCriterion
            // .settlementDates (DateRange)
            this.settlementDatesFilter = this.createSubView(DateRangeFilter, {
                model: this.model.settlementDates
            });
        },

        render: function () {
            console.log("SettlementDateFilter: render");
            // this.$el.html(this.template());
            this.$el.empty().append(this.settlementDatesFilter.render().el);
            return this;
        }

    });

    return SettlementDateFilter;
});