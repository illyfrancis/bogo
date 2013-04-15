define([
    'underscore',
    'backbone',
    'models/Criterion'
], function (_, Backbone, Criterion) {

    var SecurityCategoryCriterion = Criterion.extend({

        initialize: function () {
            this.set({
                'name': 'SecurityCategory',
                'title': 'Security Category'
            });
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