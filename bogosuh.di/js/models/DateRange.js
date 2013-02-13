define([
    "underscore",
    "backbone",
    "moment"
], function (_, Backbone, moment) {
    // require moment.js
    var DateRange = Backbone.Model.extend({
        defaults: {
            type: "today",
            fromDate: new Date(),
            toDate: new Date(),
            fromTime: {},
            toTime: {}
        },

        initialize: function (options) {
            var type = options && options.type;
            this.changeType(type);
        },

        today: function () {
            this.set({
                type: "today",
                fromDate: new Date(),
                toDate: new Date()
            });
        },

        yesterday: function () {
            this.set({
                type: "yesterday",
                fromDate: moment().subtract('d', 1).toDate(),
                toDate: moment().subtract('d', 1).toDate()
            });
        },

        last7days: function () {
            this.set({
                type: "last7days",
                fromDate: moment().subtract('w', 1).toDate(),
                toDate: moment().toDate()
            });
        },

        lastweek: function () {
            this.set({
                type: "lastweek",
                fromDate: moment().day(1).subtract('w', 1).toDate(),
                toDate: moment().day(5).subtract('w', 1).toDate()
            });
        },

        lastmonth: function () {
            this.set({
                type: "lastmonth",
                fromDate: moment().date(0).date(1).toDate(),
                toDate: moment().date(0).toDate()
            });
        },

        customdate: function (fromDate, toDate) {
            fromDate = fromDate || new Date();
            toDate = toDate || new Date();
            this.set({
                type: "customdate",
                fromDate: fromDate,
                toDate: toDate
            });
        },

        changeType: function (type) {
            var dateFunc = this[type];
            if (dateFunc) {
                dateFunc.apply(this);
            }
        },

        changeFromDate: function (dateString) {
            var newFromDate = moment(dateString);
            var toDate = this.get("toDate");
            if (toDate < newFromDate) {
                toDate = moment(newFromDate).toDate();
            }
            this.customdate(newFromDate.toDate(), toDate);
        },

        changeToDate: function (dateString) {
            var newToDate = moment(dateString);
            var fromDate = this.get("fromDate");
            if (fromDate > newToDate) {
                fromDate = moment(newToDate).toDate();
            }
            this.customdate(fromDate, newToDate.toDate());
        }
    });

    return DateRange;

});