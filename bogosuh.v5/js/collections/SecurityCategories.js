define([
    "underscore",
    "backbone",
    "models/SecurityCategory"
], function (_, Backbone, SecurityCategory) {

    var SecurityCategories = Backbone.Collection.extend({
        model: SecurityCategory,

        codes: function () {
            return this.pluck('code');
        },

        fetchByCodes: function (codes) {
            // load the locations
            if (_.isArray(codes) && codes.length > 0) {
                this.url = '/api/country/codes/' + codes;
                this.fetch();
            }
        },

        hasSelection: function () {
            return this.any(function (securityCategory) {
                return securityCategory.get('selected');
            });
        }
    });

    return SecurityCategories;

});