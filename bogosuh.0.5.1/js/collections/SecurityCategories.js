define([
    "underscore",
    "backbone",
    "models/SecurityCategory"
], function (_, Backbone, SecurityCategory) {

    var SecurityCategories = Backbone.Collection.extend({

        model: SecurityCategory,

        selectedCodes: function () {
            return _.pluck(_.where(this.toJSON(), {'selected': true}), 'code');
        },

        selectBy: function (codes) {
            _.each(codes, function (code) {
                var category = this.findWhere({'code': code});
                if (!_.isNull(category)) {
                    category.select(true);
                }
            }, this);
        },

        hasSelection: function () {
            return this.any(function (securityCategory) {
                return securityCategory.get('selected');
            });
        },

        clearSelection: function () {
            this.invoke('select', false);
        }
    });

    return SecurityCategories;

});