/*global define*/
define([
    'backbone',
    'underscore',
    'collections/PaginatedAccounts',
    'collections/ReportSchema'
], function (Backbone, _, PaginatedAccounts, ReportSchema) {

    var Repository = {

        loadAll: function (onLoaded, context) {

            // list out all load ops in array
            var loaders = ['loadAccounts', 'loadSecurities', 'loadReportSchema'],
                options = {};

            if (_.isFunction(onLoaded)) {
                var callback = function () {
                    return onLoaded.call(context);
                };
                var onSuccess = _.after(loaders.length, callback);
                options = {
                    success: function () {
                        onSuccess();
                    }
                };

                // TODO - 1. handling of error
                // TODO - 2. pass options directly into loadXXX functions?
            }

            _.each(loaders, function (loader) {
                this[loader].call(this, options); // or this[loader].apply(this, [options]);
            }, this);
        },

        loadAccounts: function (options) {
            var self = this;
            this.accounts = new PaginatedAccounts();
            // For bootstrapping, do next.
            // this.accounts.init();
            // app.data.accounts = response.accounts.valid.values; // from response.js
            // this.accounts.reset(app.data.accounts); // from global, prefetched accounts data
            // this.accounts.pager();

            this.accounts.url = '/api/accounts';
            this.accounts.fetch({
                success: function () {
                    console.log('Accounts loaded');
                    self.accounts.init();
                    self.accounts.pager();
                    // debugger;
                    options = options || {};
                    if (options.success) {
                        options.success();
                    }
                },
                error: function () {
                    console.log('Cannot fetch accounts');
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
            securities.url = 'api/securities';
            securities.fetch({
                success: function () {
                    console.log('securities loaded');

                    options = options || {};
                    if (options.success) {
                        options.success();
                    }
                },
                error: function () {
                    console.error('securities not loaded');
                }
            });
        },

        loadReportSchema: function (options) {
            var self = this;
            this.reportSchema = new ReportSchema();
            this.reportSchema.url = '/api/reportschema';
            this.reportSchema.fetch({
                success: function () {
                    // need to assume that the position is already determined - but let's just do that here for now.
                    var position = 0;
                    self.reportSchema.each(function (reportColumn) {
                        reportColumn.set('position', ++position, {silent: true});
                    });

                    options = options || {};
                    if (options.success) {
                        options.success();
                    }
                },
                error: function () {
                    // TODO - error handling
                    console.log('Error fetch reportschema');
                }
            });
        },

        // I think this is for hydrating
        loadSearchCriteria: function () {
            this.searchCriteria = new SearchCriteria();
            /*
            this.searchCriteria.reset([{
                name: 'AccountCriteria',
                title: 'Account',
                isApplied: true,
                restrictions: {
                    accountNumbers: ['0015594','0067173','0067249']
                }
            }, {
                name: 'TransactionTypeCriteria',
                title: 'Transaction Types',
                isApplied: false,
                restrictions: {
                    types: ['DVW','RVP','REC'],
                    id: 'TR001'
                }
            }, {
                name: 'SecurityIdCriteria',
                title: 'Security ID',
                isApplied: false,
                restrictions: {
                }
            }, {
                name: 'SecurityCategoryCriteria',
                title: 'Security Category',
                isApplied: false,
                restrictions: {
                }
            }, {
                name: 'SettlementDateCriteria',
                title: 'Settlement Date',
                isApplied: false,
                restrictions: {
                }
            }, {
                name: 'SettlementLocationCriteria',
                title: 'Settlement Location',
                isApplied: false,
                restrictions: {
                }
            }], {
                parse: true
            }); // for forcing the parse in the model
*/

        }

    };

    return Repository;
});