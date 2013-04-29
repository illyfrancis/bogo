define([
    "underscore",
    "backbone",
    "models/Preference"
], function (_, Backbone, Preference) {

    var Preferences = Backbone.Collection.extend({
        model: Preference,

        url: '/api/preferences',

        hasSelection: function () {
            return this.any(function (item) {
                return item.get('selected') === true;
            });
        },

        clearSelection: function (options) {
            this.each(function (item) {
                // item.set('selected', false, { silent:true });
                item.set('selected', false, options);
            });
        },

        select: function (preference) {
            this.clearSelection({silent: true});
            preference.set('selected', true);
        }

    });

    return Preferences;

});