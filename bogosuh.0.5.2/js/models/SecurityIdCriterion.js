define([
    'underscore',
    'backbone',
    'models/Criterion'
], function (_, Backbone, Criterion) {

    var SecurityIdCriterion = Criterion.extend({

        initialize: function () {
            this.set({
                'name': 'SecurityId',
                'title': 'Security Id'
            });
        },

        validate: function (attrs) {
            if(attrs.isApplied) {
                console.log('security id criterion: validate');
            }
        },

        queryCriteria: function () {
            return 'SecurityIdCriterion:JSON';
        }

    });

    return SecurityIdCriterion;

});