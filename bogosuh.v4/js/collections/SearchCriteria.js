/*global define*/
define(['underscore', 'backbone', 'models/Criterion'], function (_, Backbone, Criterion) {

    /*
        SearchCriteria is a collection of Criterion
    */
    var SearchCriteria = Backbone.Collection.extend({

        model: Criterion,

        isReadyForSearch: function () {
            return this.any(function (criterion) {
                return criterion.get('isApplied');
            }, this);
        },

        // aggregation of 'applied' critereia and 'OR'ed
        // TODO - or maybe the criteria is a 'combination' of both 'filter' and 'sort'
        // whereby each criteria object defines the definition of filter and sort.
        // getCriteria: function() {
        query: function () {
            // TODO - instead of _.map use _.each to combine both map & where into one.
            return _.reduce(_.map(this.where({isApplied: true}), this.mapper), this.reducer, '');
        },

        mapper: function (criteria) {
            return criteria.query();
        },

        reducer: function (memo, value, key, list) {
            return memo.concat(key < (list.length - 1) ? value + '#OR#' : value);
        },

        isCriterionApplied: function (criterionName) {
            // get criterion by name
            var criterionByName = this.find(function (criterion) {
                return criterion.get('name') === criterionName ||
                    criterion.get('name') + 'Criteria' === criterionName;   // temporary until api data is fixed up
            });

            return criterionByName && criterionByName.get('isApplied');
        }

    });

    return SearchCriteria;
});