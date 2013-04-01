define([
    "jquery",
    "underscore",
    "backbone",
    "events/EventBus",
    "views/AccountList",
    "views/AccountPaginator",
    "text!templates/AccountFilter.html"
], function ($, _, Backbone, EventBus, AccountList, AccountPaginator, tpl) {

    var AccountFilter = Backbone.View.extend({

        className: "account-search",

        template: _.template(tpl),

        events: {
            "click .account-selection .select-all": "selectAll",
            "click .account-selection .select-none": "selectNone",
            "click .account-filter .filter": "filterAccounts"
        },

        initialize: function () {
            // model = AccountCriterion
            this.paginatedAccounts = this.model.paginatedAccounts();

            this.listenTo(this.paginatedAccounts, "change:selected", this.filterChanged);

            this.accountList = new AccountList({
                collection: this.paginatedAccounts
            });
            this.paginator = new AccountPaginator({
                collection: this.paginatedAccounts
            });
        },

        render: function () {
            console.log("account search criteria");

            this.$el.empty();
            this.$el.html(this.template());
            // TODO - need to hold on to filter values for re-render.
            // consider splitting out "account search filter" into its own class?

            // account list
            this.accountList.setElement(this.$(".account-list table tbody")).render();

            // account paginator
            // this.$(".account-pagination").append(this.paginator.render().el);
            this.paginator.setElement(this.$(".account-pagination")).render();

            return this;
        },

        remove: function () {
            this.accountList.remove();
            this.paginator.remove();
            Backbone.View.prototype.remove.call(this);
            return this;
        },

        filterChanged: function () {
            // decide if filter value change should be tracked by SearchFilter, if so trigger "filter change" event.
            if (this.model.get("isApplied")) {
                if (!this.paginatedAccounts.hasSelection()) {
                    EventBus.trigger("filter:remove");
                } else {
                    EventBus.trigger("filter:change");
                }
            }
        },

        selectAll: function () {
            this.updateAccountSelection(true);
        },

        selectNone: function () {
            this.updateAccountSelection(false);
        },

        updateAccountSelection: function (checked) {
            // perceived performance improvement - rather than relying on collection to trigger change event then AccountRow to re-render, invoke on visible AccountRow(s) to update the model directly. The updates to the collection is silent so it will not trigger the change events.
            this.accountList.updateSelections(checked);
            this.paginatedAccounts.selectAll(checked);
        },

        filterAccounts: function () {
            var name = this.$el.find(".account-filter .account-name").val();
            var number = this.$el.find(".account-filter .account-number").val();
            var selected = this.$el.find(".account-filter .account-selection").hasClass("active");

            console.log("> " + name + ":" + number + ":" + selected);

            // build the filter fields based on selection
            var fieldFilters = [];

            // filter by number
            if(_.isEmpty(number)) {
                fieldFilters.push({
                    field: "number",
                    type: "pattern",
                    value: new RegExp(".")
                });
            } else {
                fieldFilters.push({
                    field: "number",
                    type: "pattern",
                    value: new RegExp("^" + number, "igm")
                });
            }

            // filter by name
            if(_.isEmpty(name)) {
                fieldFilters.push({
                    field: "name",
                    type: "pattern",
                    value: new RegExp(".")
                });
            } else {
                fieldFilters.push({
                    field: "name",
                    type: "pattern",
                    value: new RegExp("^" + name, "igm")
                });
            }

            // filter by selection
            fieldFilters.push({
                field: "selected",
                type: "equalTo",
                value: selected
            });

            this.paginatedAccounts.setFieldFilter(fieldFilters);

            // TODO - how to remove filter? the lib doesn't provide a function for this.
            // one way is to replace .models with .originalModels before starting..
        }

    });

    return AccountFilter;
});