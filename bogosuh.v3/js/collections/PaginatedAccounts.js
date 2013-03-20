define([
    "underscore",
    "backbone",
    "backbone.paginator",
    "models/Account"
], function (_, Backbone, Paginator, Account) {

    var PaginatedAccounts = Backbone.Paginator.clientPager.extend({

        model: Account,

        paginator_core: {
            // the type of the request (GET by default)
            type: "GET",

            // the type of reply (jsonp by default)
            dataType: "json",

            // the URL (or base URL) for the service
            url: "/api/accounts"
        },

        paginator_ui: {
            // the lowest page index your API allows to be accessed
            firstPage: 1,

            // which page should the paginator start from
            // (also, the actual page the paginator is on)
            currentPage: 1,

            // how many items per page should be shown
            perPage: 10,

            // a default number of total pages to query in case the API or
            // service you are using does not support providing the total
            // number of pages for us.
            // 10 as a default in case your service doesn't return the total
            totalPages: 10
        },
        server_api: {
            /*
            // the query field in the request
            '$filter': 'substringof(\'america\',Name)',

            // number of items to return per request/page
            '$top': function() {
                return this.totalPages * this.perPage;
            },

            // how many results the request should skip ahead to
            // customize as needed. For the Netflix API, skipping ahead based on
            // page * number of results per page was necessary.
            '$skip': function() {
                return this.totalPages * this.perPage;
            },

            // field to sort by
            'orderby': 'ReleaseYear',

            // what format would you like to request results in?
            '$format': 'json',

            // custom parameters
            '$inlinecount': 'allpages'
            ,
            '$callback': '?'
    */
        },

        parse: function (response) {
            // Be sure to change this based on how your results
            // are structured
            //      var tags = response.d.results;
            console.log("parse");
            // var tags = response.values;
            // return tags;
            return response;
        },

        // scope changed as part of 'sync' call but this allows caller to not rely on fetch()
        // must call this prior to pager() if not fetch()ing via ajax. i.e. if using reset()
        init: function () {
            // Change scope of 'paginator_ui' object values
            _.each(this.paginator_ui, function (value, key) {
                if (_.isUndefined(this[key])) {
                    this[key] = this.paginator_ui[key];
                }
            }, this);
        },

        // collection logic
        selectAll: function (state) {
            if (_.isUndefined(state) || !_.isBoolean(state)) {
                state = true;
            }

            _.each(this.sortedAndFilteredModels, function (account) {
                account.set({
                    selected: state
                }, {
                    silent: true
                });
            });
        },

        hasSelection: function () {
            return _.any(this.origModels, function (account) {
                return account.get("selected");
            }, this);
        },

        selectedAccountNumbers: function () {
            var selected = [];
            _.each(this.origModels, function (account) {
                if (account.get("selected")) {
                    selected.push(account.get("number"));
                }
            });
            return selected;
        },

        selectBy: function (accountNumbers) {
            _.each(this.origModels, function (account) {
                var index = _.indexOf(accountNumbers, account.get("number"));
                if (index >= 0) {
                    account.set("selected", true);
                }
            });
        }

    });

    return PaginatedAccounts;
});