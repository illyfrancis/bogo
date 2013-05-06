define([
    'underscore',
    'backbone',
    'backbone.paginator',
    'models/Account'
], function (_, Backbone, Paginator, Account) {

    var Accounts = Backbone.Paginator.clientPager.extend({

        model: Account,

        paginator_core: {
            type: 'GET',
            dataType: 'json',
            url: '/api/accounts'
        },

        paginator_ui: {
            firstPage: 1,
            currentPage: 1,
            perPage: 9,
            totalPages: 10
        },

        // parse: function (response) {
        //     return response;
        // },

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

            // TODO - consider using invoke
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
                return account.get('selected');
            }, this);
        },

        selectedAccountNumbers: function () {
            var selected = [];
            _.each(this.origModels, function (account) {
                if (account.get('selected')) {
                    selected.push(account.get('number'));
                }
            });
            return selected;
        },

        selectBy: function (accountNumbers) {
            this._selectBy(accountNumbers);
        },

        // slow, O(n^2) - especially when accountNumbers are large (or the same as origModels)
        _selectBy: function (accountNumbers) {
            if (accountNumbers.length === 0) {
                return;
            }

            // TODO - this causes IE stop scripting etc warning....
            var index = -1;
            _.each(this.origModels, function (account) {
                index = _.indexOf(accountNumbers, account.get('number'));
                if (index >= 0) {
                    account.set('selected', true);
                }
            });
        },

        // version 2
        _2_selectBy: function (accountNumbers) {
            _.each(accountNumbers, function (number) {
                _.delay(this.oneByOne, 0, number, this.origModels);
            }, this);
        },

        oneByOne: function (number, loop) {
            // console.log('*' + number);
            _.each(loop, function (account) {
                if (account.get('number') === number) {
                    account.set('selected', true);
                }
            });
        },

        // version 3
        _3_selectBy: function (accountNumbers) {
            var copy = accountNumbers.concat();

            this.chunk(copy, this.doProcess, this);
        },

        chunk: function (array, process, context) {
            (function () {
                var item = array.shift();
                process.call(context, item);

                if (array.length > 0){
                    setTimeout(arguments.callee, 0);
                }
            })();
        },

        doProcess: function (accountNumber) {
            var model = _.find(this.origModels, function (account) {
                return account.get('number') === accountNumber;
            });

            if (model) {
                model.set('selected', true);
            }
        },

        // version 4 - with callback
        _4_selectBy: function (accountNumbers) {
            var copy = accountNumbers.concat();

            this.chunk2(copy, this.doProcess, this, this.alertDone);
        },

        alertDone: function () {
            console.log('>>>>>>>>>>>>>>>>>>>>> done ! >>>>>>>>>>>>>>>');
            alert('done');
        },

        chunk2: function (array, process, context, callback) {
            (function () {
                if (array.length === 0) {
                    callback.call(context);
                } else {
                    var item = array.shift();
                    process.call(context, item);
                    setTimeout(arguments.callee, 0);
                }
            })();
        },

        // version 5 - with progress
        _5_selectBy: function (accountNumbers) {
            var copy = accountNumbers.concat();

            this.chunk3(copy, this.doProcess, this, this.alertDone, this.progressCallback);
        },

        chunk3: function (array, process, context, doneCallback, progressCallback) {
            var total = array.length;
            (function () {
                if (array.length === 0) {
                    doneCallback.call(context);
                } else {
                    progressCallback.call(context, array.length, total);
                    var item = array.shift();
                    process.call(context, item);
                    setTimeout(arguments.callee, 0);
                }
            })();
        },

        progressCallback: function (current, total) {
            var percent = 100 * (total - current) / total;
            console.log('> ' + percent);
        },

        // version 6 - chunk them into a bigger pieces.

        _6_selectBy: function (accountNumbers) {
            var copy = accountNumbers.concat();

            // split accountNumbers into chunks.
            var chunkSize = 100,
                bundles = [];

            do {
                bundles.push(copy.splice(0, chunkSize));
            } while (copy.length > 0);

            this.chunk3(bundles, this.doBiggerProcess, this, this.alertDone, this.progressCallback);
        },


        doBiggerProcess: function (accountNumbers) {
            if (accountNumbers.length === 0) {
                return;
            }

            do {
                var item = accountNumbers.shift();
                this.doProcess(item);
            } while (accountNumbers.length > 0);
        },

        clearSelections: function () {
            _.invoke(this.origModels, 'select', false);
        }

    });

    return Accounts;
});