define(["underscore", "backbone", "models/Transaction"], function (_, Backbone, Transaction) {
    /*
        TransactionReport is a collection of Transaction
    */
    var TransactionReport = Backbone.Collection.extend({

        model: Transaction,

        initialize: function () {
            this._pager = {
                total: 0,
                limit: 1,
                offset: 0
            };
        },

        parse: function (response) {
            this._setPageTotal(response.total);
            return response.transactions;
        },

        _setPageTotal: function (total) {
            this._pager.total = (!_.isNumber(total)) ? 0 : total;
        },

        pageInfo: function (limit, offset) {
            this._pager.limit = limit;
            this._pager.offset = offset;
        },

        pager: function () {
            // make sure limit is valid
            var limit = this._pager.limit;
            if (!_.isNumber(limit) || limit <= 0 || _.isNaN(limit)) {
                this._pager.limit = 1;
            }

            return {
                current: this._pager.offset + 1,
                total: Math.ceil(this._pager.total / this._pager.limit)
            };
        }
    });

    return TransactionReport;

});