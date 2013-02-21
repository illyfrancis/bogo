define([
    "underscore",
    "backbone",
    "models/DateRange"
], function (_, Backbone, DateRange) {

    var SettlementDateCriteria = {

        hydrate: function (selections) {
            // map to settlement date range model
            console.log("SettlementDateCriteria: hydrate");
            if(_.isUndefined(this.settlementDates)) {
                this.settlementDates = new DateRange();
            }
        },

        preserve: function () {},

        query: function () {
            return "SettlementDateCriteria:JSON";
        },

        validate: function (attrs) {
            if(attrs.isApplied) {
                console.log("settlement date criteria: validate");
            }
        }

    };

    return SettlementDateCriteria;

});