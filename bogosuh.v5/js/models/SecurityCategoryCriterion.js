define([
    'underscore',
    'backbone',
    'models/Criterion',
    'collections/SecurityCategories'
], function (_, Backbone, Criterion, SecurityCategories) {

    var SecurityCategoryCriterion = Criterion.extend({

        initialize: function () {
            this.set({
                'name': 'SecurityCategory',
                'title': 'Security Category'
            });

            this.securityCategories = new SecurityCategories();
            this.securityCategories.reset([{code: 'EQU', desc: 'EQUITY'},
                {code: 'FIX', desc: 'FIXED INCOME'},
                {code: 'DRV', desc: 'DERIVATIVES'},
                {code: 'SFI', desc: 'SHORT TERM FIXED INCOME'},
                {code: 'FCU', desc: 'FOREIGN CURRENCY'},
                {code: 'MET', desc: 'PRECIOUS METAL'},
                {code: 'MIS', desc: 'MISCELLANEOUS'}]);
        },

        validate: function (attrs) {
            if(attrs.isApplied) {
                console.log('security category criterion: validate');
                if (!this.securityCategories.hasSelection()) {
                    return 'No selection';
                }
            }
        },

        hydrate: function (data) {
            // TODO - DRY it
            // expect data is in the form of { categories: [array of codes], isApplied: boolean}
            var invalid = _.isUndefined(data) || _.isUndefined(data.categories) || _.isUndefined(data.isApplied),
                valid = !invalid && _.isArray(data.categories) && _.isBoolean(data.isApplied) && data.categories.length > 0;

            if (valid) {
                this.securityCategories.clearSelection();
                this.securityCategories.selectBy(data.categories);
                this.setFilter(data.isApplied);
            }
        },

        preserve: function () {
            var data = Criterion.prototype.preserve.call(this);
            data.categories = this.securityCategories.selectedCodes();
            return data;
        },

        reset: function () {
            this.securityCategories.clearSelection();
            this.removeFilter();
        },

        queryCriteria: function () {
            return 'SecurityCategoryCriterion:JSON';
        }
    });

    return SecurityCategoryCriterion;

});
