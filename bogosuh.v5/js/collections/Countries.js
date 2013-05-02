define([
    "underscore",
    "backbone",
    "models/Country"
], function (_, Backbone, Country) {

    var Countries = Backbone.Collection.extend({
        model: Country,

        codes: function () {
            return this.pluck('code');
        },

        fetchByCodes: function (codes) {
            // load the locations
            if (_.isArray(codes) && codes.length > 0) {
                this.url = '/api/country/codes/' + codes;
                this.fetch();
            }
        }
    });

    return Countries;

});