define([
    "underscore",
    "backbone",
    "models/Country"
], function (_, Backbone, Country) {

    var Countries = Backbone.Collection.extend({
        model: Country
    });

    return Countries;

});