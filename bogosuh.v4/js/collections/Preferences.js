define([
    "underscore",
    "backbone",
    "models/Preference"
], function (_, Backbone, Preference) {

    var Preferences = Backbone.Collection.extend({
        model: Preference,
        url: '/api/preferences'
    });

    return Preferences;

});