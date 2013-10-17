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

        hydrate: function (data) {
            // map to settlement date range model
            // console.log('SettlementDateCriterion: hydrate');
            // if(_.isUndefined(this.settlementDates)) {
            //     this.settlementDates = new DateRange();
            //     this.settlementDates.lastweek();
            // }

            var dateRange = data.dateRange;
            if (dateRange === 'customdate') {
                var fromDate = new Date(data.dates.from),
                    toDate = new Date(data.dates.to);
                this.settlementDates.customdate(fromDate, toDate);
            } else {
                this.settlementDates.changeType(dateRange);
            }

            this.setFilter(data.isApplied);
        },

        preserve: function () {
            // var data = Criterion.prototype.preserve.call(this);
            return {
                name: this.get('name'),
                isApplied: this.get('isApplied'),
                dateRange: this.settlementDates.get('type'),
                dates: {
                    from: this.settlementDates.get('fromDate').getTime(),
                    to: this.settlementDates.get('toDate').getTime()
                }
            };
        },

        queryCriteria: function () {
            // console.log('SettlementDateCriterion:JSON');
            return {
                settlementDate: {
                    $gte: '#date' + this.settlementDates.get('fromDate').getTime(),
                    $lte: '#date' + this.settlementDates.get('toDate').getTime()
                }
            };
        },

        validate: function (attrs) {
            if(attrs.isApplied) {
                // console.log('settlement date criterion: validate');
            }
        }

    });

    return SettlementDateCriterion;

});