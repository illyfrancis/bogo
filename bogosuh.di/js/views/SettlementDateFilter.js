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
            // model = ReportCriteria (SettlementDateCriteria)
            // .settlementDates (DateRange)
            // debugger;
            this.settlementDatesFilter = new DateRangeFilter({
                model: this.model.settlementDates
            });
            this.$el.empty().append(this.settlementDatesFilter.el);
        },

        render: function () {
            console.log("SettlementDateFilter: render");
            // this.$el.html(this.template());
            return this;
        }

    });

    return SettlementDateFilter;
});