/*global define*/
var app = app || {};

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'apps/Extension',
    'apps/EventBus',
    'apps/Repository',
    'apps/Mediator'
], function ($, _, Backbone, Bootstrap, Extension, EventBus, Repository, Mediator) {

    // var d = new Date(1365706592680);
    // alert(d);

/*    var Transaction = Backbone.Model.extend({
        idAttribute: '_id',
        urlRoot: '/api/transactions'
    });

    var Transactions = Backbone.Collection.extend({
        model: Transaction,
        url: '/api/transactions'
    });

    var process = function (transactions) {
        transactions.each(function (transaction) {
            // console.log(JSON.stringify(transaction));

            var keys = Object.keys(transaction.attributes),
                dateString, date, units, amount;
            _.each(keys, function (key) {
                // convert all date string to real dates
                if (key.indexOf('Date') >= 0) {
                    dateString = transaction.get(key);
                    date = null;
                    if (dateString !== '') {
                        date = new Date(dateString);
                    }
                    transaction.set('_'+key, date);
                }
                // convert numerics
                units = parseFloat(transaction.get('units'));
                transaction.set('_units', units);

                amount = parseFloat(transaction.get('amount'));
                transaction.set('_amount', amount);

                // save
                // transaction.save();
            });
        });
    };

    var tr = new Transactions();
    tr.fetch({
        success: function () {
            process(tr);
        }
    });
    app.transactions = tr;*/
});
