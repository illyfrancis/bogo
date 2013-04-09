/*global define*/
define([
    'backbone',
    'underscore',
    'collections/PaginatedAccounts',
    'collections/ReportSchema',
    'collections/TreeCollection',
    'collections/SearchCriteria'
], function (Backbone, _, PaginatedAccounts, ReportSchema, TreeCollection, SearchCriteria) {

    var Repository = {

        loadAll: function (onLoaded, context) {

            // list out all load ops in array
            var loaders = ['loadAccounts', 'loadSecurities', 'loadReportSchema', 'loadTransactionTypes'],
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
                reset: true,
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

        loadTransactionTypes: function(options) {
            var data = [{
                name: "TRADE",
                list: [{
                    name: "RECEIVE",
                    list: [
                        {name: "RECEIVE VS PAYMENT (RVP)", value: "RVP"},
                        {name: "RECEIVE FREE (REC)", value: "REC"},
                        {name: "PURCHASE (PUR)", value: "PUR"},
                        {name: "MUTUAL FUND PURCHASE (MTP)", value: "MTP"},
                        {name: "RETURN DELIVER (RTD)", value: "RTD"},
                        {name: "RECEIVE NO S F (RCW)", value: "RCW"},
                        {name: "SELL REVERSAL (SRV)", value: "SRV"}
                    ]},{
                    name: "DELIVER",
                    list: [
                        {name: "DELIVER VS PAYMENT (DVP)", value: "DVP"},
                        {name: "DELIVER FREE (DEL)", value: "DEL"},
                        {name: "SELL (SEL)", value: "SEL"},
                        {name: "MUTUAL FUND REDEMPTION (MTR)", value: "MTR"},
                        {name: "RETURN RECEIVE (RTR)", value: "RTR"},
                        {name: "DELIVER NO S F (DLW)", value: "DLW"},
                        {name: "DELIVER VS PAYMENT NO S F (DVW)", value: "DVW"},
                        {name: "RETURN DELIVER NO S F (RWD)", value: "RWD"},
                        {name: "PURCHASE REVERSAL (PRV)", value: "PRV"}
                    ]}
                ]},{
                name: "CORPORATE ACTIONS",
                list: [
                    {name: "CONVERSION (CON)", value: "CON"},
                    {name: "DIVIDEND REINVESTMENT (DRV)", value: "DRV"},
                    {name: "REV DIVIDEND REINVESTMENT (DRR)", value: "DRR"},
                    {name: "EXCHANGE (EXC)", value: "EXC"},
                    {name: "LIQUIDATION (LIQ)", value: "LIQ"},
                    {name: "MERGER (MER)", value: "MER"},
                    {name: "NAME CHANGE (NAM)", value: "NAM"},
                    {name: "REDEMPTION (RED)", value: "RED"},
                    {name: "RIGHTS (RTS)", value: "RTS"},
                    {name: "STOCK DIVIDEND (SDV)", value: "SDV"},
                    {name: "SUBSCRIPTION (SUB)", value: "SUB"},
                    {name: "TENDER (TEN)", value: "TEN"}
                ]},{
                name: "MISCELLANEOUS",
                list: [
                    {name: "ADJUST (ADJ)", value: "ADJ"},
                    {name: "EQUALIZATION (EQL)", value: "EQL"},
                    {name: "FROZEN CALL BOND (FCB)", value: "FCB"},
                    {name: "MISCELLANEOUS (LPA)", value: "LPA"}
                ]
            }];

            this.transactionTypes = new TreeCollection();
            this.transactionTypes.reset(data);

            options = options || {};
            if (options.success) {
                console.log('transaction types loaded');
                options.success();
            }
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

            var reportSchema = this.reportSchema();
            reportSchema.url = '/api/reportschema';
            reportSchema.fetch({
                success: function () {
                    // need to assume that the position is already determined - but let's just do that here for now.
                    var position = 0;
                    reportSchema.each(function (reportColumn) {
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

        reportSchema: function () {
            if (!this._reportSchema) {
                this._reportSchema = new ReportSchema();
            }

            return this._reportSchema;
        },

        // I think this is for hydrating
        loadPreference: function (callback, context) {

            var preference = new Backbone.Collection();
            // preference.url = '/api/criteria/{id}';
            // preference.fetch();

            preference.reset([{
                name: 'Account',
                restrictions: {
                    isApplied: true,
                    accountNumbers: ['0015594','0067173','0067249']
                }
            }, {
                name: 'TransactionType',
                restrictions: {
                    isApplied: true,
                    types: ['DVW','RVP','REC'],
                    id: 'TR001'
                }
            }], {
                parse: true
            }); // for forcing the parse in the model

            if (callback && context) {
                callback.call(context, preference);
            }
        },

        savePreference: function (preference, callback, context) {
            console.log("savePreference");
            // callback.call(context);

            preference.save();

        },

        // search criteria isn't persistent model so it shouldn't be managed by Repository
        // but for now just keep it here.
        searchCriteria: function () {
            if (!this._searchCriteria) {
                this._searchCriteria = new SearchCriteria();
            }

            return this._searchCriteria;
        }

    };

    return Repository;
});