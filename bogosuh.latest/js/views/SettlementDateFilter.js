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
            this.settlementDatesFilter = new DateRangeFilter({
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