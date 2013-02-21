define(["underscore", "backbone", "models/ReportItem"], function (_, Backbone, ReportItem) {
    /*
        TransactionReport is a collection of Transaction
    */
    var Report = Backbone.Collection.extend({
        model: ReportItem
    });

    return Report;

});