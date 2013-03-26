/*global define,app*/
define(["collections/PaginatedAccounts"], function (PaginatedAccounts) {

    var AccountCriteria = {

        hydrate: function (selections) {
            // apply restrictions to accounts
            var accountNumbers = selections.accountNumbers;
            this.paginatedAccounts().selectBy(accountNumbers);
        },

        paginatedAccounts: function () {
            if (this.accounts === undefined) {
                this.accounts = new PaginatedAccounts();
                this.accounts.init();
                app.data.accounts = response.accounts.valid.values; // from response.js
                this.accounts.reset(app.data.accounts); // from global, prefetched accounts data
                // this.accounts.reset(response.accounts.valid.values); // from response.js
                // console.log("count before pager : " + this.accounts.length);
                this.accounts.pager();
                // console.log("count after pager : " + this.accounts.length);
            }

            return this.accounts;
        },

        preserve: function () {
            console.log("> account criteria: preserve");
            this.get("restrictions").accountNumbers = [2];
        },

        query: function () {
            console.log("> account criteria: ");
            return this.paginatedAccounts().selectedAccountNumbers();
        },

        validate: function (attrs) {
            // when the criteria is applied, confirm if  the criteria are set
            if (attrs.isApplied) {
                if (this.paginatedAccounts() && !this.paginatedAccounts().hasSelection()) {
                    // TODO - better error message
                    return "Cannot apply filter, nothing selected";
                }
            }
        }

    };

    return AccountCriteria;

});