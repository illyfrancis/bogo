// TODO - require jquery ui datepicker (calender that is)
define([
    "jquery",
    "jquery.ui",
    "underscore",
    "backbone",
    "moment",
    "text!templates/DateRangeFilter.html"
], function ($, ui, _, Backbone, moment, tpl) {

    var DateRangeFilter = Backbone.View.extend({

        className: "date-range",

        template: _.template(tpl),

        initialize: function () {
            this.onInit();
            this.model.on("change", this.render, this);
        },

        events: {
            "change select": "changeType",
            "change .fromDate": "changeFromDate",
            "change .toDate": "changeToDate"
            // ,"blur": "onDateChange"
        },

        changeType: function (e) {
            var selected = $(e.target).val();
            console.log("selected: " + selected);
            // this.model.set("type", selected);
            this.model.changeType(selected);
        },

        changeFromDate: function (e) {
            var oldDate = this.model.get("fromDate");

            var selectedDate = $(e.target).val();
            if (selectedDate != moment(oldDate).format("L")) {
                console.log("date changed : " + selectedDate);
                this.model.changeFromDate(selectedDate);
            }
        },

        changeToDate: function (e) {
            var oldDate = this.model.get("toDate");

            var selectedDate = $(e.target).val();
            if (selectedDate != moment(oldDate).format("L")) {
                console.log("date changed : " + selectedDate);
                this.model.changeToDate(selectedDate);
            }
        },

        onInit: function () {
            this.$el.html(this.template());
            this.render();
            this.$el.find(".fromDate, .toDate").datepicker({
                showOtherMonths: true,
                selectOtherMonths: true
            });
        },

        render: function () {
            var fromDate = this.model.get("fromDate");
            this.$el.find(".fromDate").val(moment(fromDate).format("L"));

            var toDate = this.model.get("toDate");
            this.$el.find(".toDate").val(moment(toDate).format("L"));

            var type = this.model.get("type");
            this.$el.find("select").val(type);
        }
    });

    return DateRangeFilter;
});