define([
    "jquery",
    "underscore",
    "backbone",
    "views/AccountRow",
    "views/AccountPaginator",
    "text!templates/AccountFilter.html"
], function ($, _, Backbone, AccountRow, AccountPaginator, tpl) {

    var AccountFilter = Backbone.View.extend({

        className: "account-search",

        template: _.template(tpl),

        events: {
            "click .account-selection .select-all": "selectAll",
            "click .account-selection .select-none": "selectNone",
            "click .account-filter .filter": "filterAccounts"
        },

        initialize: function () {
            // model = ReportCriteria (AccountCriteria)
            this.model.paginatedAccounts().on("reset", this.renderAccountList, this);
            this.model.paginatedAccounts().on("change:selected", this.filterChanged, this);

            // keep track of account rows
            this._accountRows = [];

            this.paginator = new AccountPaginator({
                collection: this.model.paginatedAccounts()
            });
        },

        filterChanged: function () {
            // decide if filter value change should be tracked by SearchFilter, if so trigger "filter change" event.
            if(this.model.get("isApplied")) {
                if(!this.model.paginatedAccounts().hasSelection()) {
                    app.EventBus.trigger("filter:remove");
                } else {
                    app.EventBus.trigger("filter:change");
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
            _.each(this._accountRows, function (accountRow) {
                accountRow.updateSelection(checked);
            });

            this.model.paginatedAccounts().selectAll(checked);
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

            this.model.paginatedAccounts().setFieldFilter(fieldFilters);

            // TODO - how to remove filter? the lib doesn't provide a function for this.
            // one way is to replace .models with .originalModels before starting..
        },

        render: function () {
            console.log("account search criteria");

            this.$el.empty();
            this.$el.html(this.template()); // TODO - need to hold on to filter values for re-render. consider splitting out "account search filter" into its own class?
            // account list
            this.$table = this.$el.find(".account-list table tbody");
            this.renderAccountList();

            // account paginator
            this.$el.find(".account-pagination").append(this.paginator.el);
            this.paginator.render();

            return this;
        },

        renderAccountList: function () {
            this.disposeAccountRows();
            this.$table.empty();
            this.model.paginatedAccounts().each(this.appendAccountRow, this);
            return this;
        },

        appendAccountRow: function (account) {
            this.$table.append(this.createAccountRow(account).render().el);
        },

        disposeAccountRows: function () {
            // clean up
            _.each(this._accountRows, function (row) {
                row.dispose();
            });

            this._accountRows = [];
            // this._accountRows.length = 0; // http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript
        },

        createAccountRow: function (account) {
            var accountRow = new AccountRow({
                model: account
            });
            this._accountRows.push(accountRow);
            return accountRow;
        }

    });

    return AccountFilter;
});