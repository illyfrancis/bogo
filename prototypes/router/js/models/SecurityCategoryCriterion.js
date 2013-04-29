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
            }
        },

        queryCriteria: function () {
            return 'SecurityCategoryCriterion:JSON';
        }
    });

    return SecurityCategoryCriterion;

});
