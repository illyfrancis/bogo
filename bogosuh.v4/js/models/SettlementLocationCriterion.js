define([
    'underscore',
    'backbone',
    'models/Criterion'
], function (_, Backbone, Criterion) {

    var SettlementLocationCriterion = Criterion.extend({

        initialize: function () {
            this.set({
                'name': 'SettlementLocation',
                'title': 'Settlement Location'
            });
        },

        validate: function (attrs) {
            if(attrs.isApplied) {
                console.log('settlement location criteria: validate');
            }
        },

        query: function () {
            return 'SettlementLocationCriterion:JSON';
        }
    });

    return SettlementLocationCriterion;

});