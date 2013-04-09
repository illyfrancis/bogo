define([
    'underscore',
    'backbone',
    'models/Criterion',
    'models/DateRange'
], function (_, Backbone, Criterion, DateRange) {

    var SettlementDateCriterion = Criterion.extend({

        initialize: function () {
            this.set({
                'name': 'SettlementDate',
                'title': 'Settlement Date'
            });

            this.settlementDates = new DateRange();
            this.settlementDates.lastweek();
        },

        hydrate: function (selections) {
            // map to settlement date range model
            console.log('SettlementDateCriterion: hydrate');
            // if(_.isUndefined(this.settlementDates)) {
            //     this.settlementDates = new DateRange();
            //     this.settlementDates.lastweek();
            // }
        },

        query: function () {
            return 'SettlementDateCriterion:JSON';
        },

        validate: function (attrs) {
            if(attrs.isApplied) {
                console.log('settlement date criterion: validate');
            }
        }

    });

    return SettlementDateCriterion;

});