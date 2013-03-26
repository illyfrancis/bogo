/*global define*/
define([
    "backbone",
    "underscore",
    "collections/PaginatedAccounts"
], function (Backbone, _, PaginatedAccounts) {

    var ReferenceRepository = {

        loadAll: function (onLoaded) {

            // list out all load ops in array
            var loaders = ["loadAccounts", "loadSecurities"],
                options = {};

            if (_.isFunction(onLoaded)) {
                var onSuccess = _.after(loaders.length, onLoaded);
                options = {
                    success: function () {
                        onSuccess();
                    }
                };
            }

            _.each(loaders, function (loader) {
                this[loader].call(this, options); // or this[loader].apply(this, [options]);
            }, this);
        },

        loadAccounts: function (options) {
            // the accounts to choose from?
            // Q. should this return the Backbone Collection or JSON?
            var self = this;
            // this.accounts = new PaginatedAccounts();
            this.accounts = new Backbone.Collection();
            // this.accounts.init();
            // app.data.accounts = response.accounts.valid.values; // from response.js
            // this.accounts.reset(app.data.accounts); // from global, prefetched accounts data
            // this.accounts.pager();

            this.accounts.url = "/api/accounts";
            this.accounts.fetch({
                success: function () {
                    console.log("Accounts loaded");
                    // self.accounts.init();
                    // self.accounts.pager();
                    // debugger;
                    options = options || {};
                    if (options.success) {
                        options.success();
                    }
                },
                error: function () {
                    console.log("Cannot fetch accounts");
                }
            });

        },

        loadSwiftReasons: function () {
            // all available swift reasons code?
        },

        loadTransactionTypes: function() {

        },

        // this is just for testing... remove
        loadSecurities: function (options) {
            var securities = new Backbone.Collection();
            securities.url = "api/securities";
            securities.fetch({
                success: function () {
                    console.log("securities loaded");

                    options = options || {};
                    if (options.success) {
                        options.success();
                    }
                },
                error: function () {
                    console.error("securities not loaded");
                }
            });
        }
    };
    
    return ReferenceRepository;
});