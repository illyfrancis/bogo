define(["underscore", "backbone", "models/Transaction"], function (_, Backbone, Transaction) {
    /*
        TransactionReport is a collection of Transaction
    */
    var TransactionReport = Backbone.Collection.extend({
        model: Transaction
    });

    return TransactionReport;

});