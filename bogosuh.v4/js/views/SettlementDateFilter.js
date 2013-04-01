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
            this.settlementDatesFilter = new DateRangeFilter({
                model: this.model.settlementDates
            });
        },

        render: function () {
            console.log("SettlementDateFilter: render");
            // this.$el.html(this.template());
            this.$el.empty().append(this.settlementDatesFilter.render().el);
            return this;
        },

        remove: function () {
            this.settlementDatesFilter.remove();
            Backbone.View.prototype.remove.call(this);
            return this;
        }

    });

    return SettlementDateFilter;
});