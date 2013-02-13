// define console for IE8
if (window.console === undefined) {
    window.console = {};
    window.console.log = function(e) { /*alert(e);*/ };
}


var app = app || {};
app.models = app.models || {};

// require moment.js
app.models.DateRange = Backbone.Model.extend({
    defaults: {
        type: "today",
        // today, yesterday etc
        fromDate: new Date(),
        toDate: new Date(),
        fromTime: {},
        toTime: {}
    },

    initialize: function(options) {
        var type = options && options.type;
        this.changeType(type);
    },

    today: function() {
        this.set({
            type: "today",
            fromDate: new Date(),
            toDate: new Date()
        });
    },

    yesterday: function() {
        this.set({
            type: "yesterday",
            fromDate: moment().subtract('d', 1).toDate(),
            toDate: moment().subtract('d', 1).toDate()
        });
    },

    last7days: function() {
        this.set({
            type: "last7days",
            fromDate: moment().subtract('w', 1).toDate(),
            toDate: moment().toDate()
        });
    },

    lastweek: function() {
        this.set({
            type: "lastweek",
            fromDate: moment().day(1).subtract('w', 1).toDate(),
            toDate: moment().day(5).subtract('w', 1).toDate()
        });
    },

    lastmonth: function() {
        this.set({
            type: "lastmonth",
            fromDate: moment().date(0).date(1).toDate(),
            toDate: moment().date(0).toDate()
        });
    },

    customdate: function() {
        this.set({
            type: "customdate",
            fromDate: new Date(),
            toDate: new Date()
        });
    },

    changeType: function(type) {
        var dateFunc = this[type];
        if (dateFunc) {
            dateFunc.apply(this);
        }
    },

    changeFromDate: function(dateString) {
        var newDate = moment(dateString);
        var toDate = this.get("toDate");
        if (toDate < newDate) {
            toDate = moment(newDate).toDate();
        }
        this.set({
            type: "customdate",
            fromDate: newDate.toDate(),
            toDate: toDate
        });
    },

    changeToDate: function(dateString) {
        var newDate = moment(dateString);
        var fromDate = this.get("fromDate");
        if (fromDate > newDate) {
            fromDate = moment(newDate).toDate();
        }
        this.set({
            type: "customdate",
            fromDate: fromDate,
            toDate: newDate.toDate()
        });
    },

/*    validate: function(attrs) {
        var a = moment(attrs.fromDate).isValid();
        var b = moment(attrs.toDate).isValid();

        if (a && b) {
            console.log("valid");
        } else {
            console.log("not valid");
            return "not valid";
        }
    }*/
});

app.views = app.views || {};
app.views.DateRangeFilter = Backbone.View.extend({

    className: "date-range",

    template: _.template($("#tpl-date-range-filter").html()),

    initialize: function() {
        this.onInit();
        this.model.on("change", this.render, this);
    },

    events: {
        "change select": "changeType",
        "change .fromDate": "changeFromDate",
        "change .toDate": "changeToDate"
        // ,"blur": "onDateChange"
    },

    changeType: function(e) {
        var selected = $(e.target).val();
        console.log("selected: " + selected);
        // this.model.set("type", selected);
        this.model.changeType(selected);
    },

    changeFromDate: function(e) {
        var oldDate = this.model.get("fromDate");

        var selectedDate = $(e.target).val();
        if (selectedDate != moment(oldDate).format("L")) {
            console.log("date changed : " + selectedDate);
            this.model.changeFromDate(selectedDate);
        }
    },

    changeToDate: function(e) {
        var oldDate = this.model.get("toDate");

        var selectedDate = $(e.target).val();
        if (selectedDate && selectedDate != moment(oldDate).format("L")) {
            console.log("date changed : " + selectedDate);
            this.model.changeToDate(selectedDate);
        }
    },

    onInit: function() {
        this.$el.html(this.template());
        this.$el.find(".fromDate").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
        this.$el.find(".toDate").datepicker();
        this.render();
    },

    render: function() {
        // model -> view
        console.log("render");
        var fromDate = this.model.get("fromDate");
        this.$el.find(".fromDate").val(moment(fromDate).format("L"));

        var toDate = this.model.get("toDate");
        this.$el.find(".toDate").val(moment(toDate).format("L"));

        var type = this.model.get("type");
        this.$el.find("select").val(type);
    }
});

$(function() {
    tradeDates = new app.models.DateRange();
    tradeDatesFilter = new app.views.DateRangeFilter({
        model: tradeDates
    });

    $(".date-filters").append(tradeDatesFilter.el);

    // another filter?
    settlementDates = new app.models.DateRange({
        type: "yesterday"
    });
    settlementDatesFilter = new app.views.DateRangeFilter({
        model: settlementDates
    });

    $(".date-filters").append(settlementDatesFilter.el);

});