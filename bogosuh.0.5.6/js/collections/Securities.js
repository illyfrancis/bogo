define([
    "underscore",
    "backbone",
    "models/Security"
], function (_, Backbone, Security) {

    var Securities = Backbone.Collection.extend({
        model: Security
    });

    return Securities;

});