/*global define*/
define(['underscore', 'backbone', 'models/Criterion'], function (_, Backbone, Criterion) {

    var SearchCriteria = Backbone.Collection.extend({

        model: Criterion,

        isReadyForSearch: function () {
            return this.any(function (criterion) {
                return criterion.get('isApplied');
            }, this);
        },

        // aggregation of 'applied' criterion and 'OR'ed
        // TODO - or maybe the criteria is a 'combination' of both 'filter' and 'sort'
        // whereby each criteria object defines the definition of filter and sort.
        // getCriteria: function() {
        query: function () {
            // TODO - instead of _.map use _.each to combine both map & where into one.
            return _.reduce(_.map(this.where({isApplied: true}), this.mapper), this.reducer, '');
        },

        mapper: function (criterion) {
            return criterion.query();
        },

        reducer: function (memo, value, key, list) {
            return memo.concat(key < (list.length - 1) ? value + '#OR#' : value);
        },

        isCriterionApplied: function (criterionName) {
            // get criterion by name
            var criterionByName = this.find(function (criterion) {
                return criterion.get('name') === criterionName;
            });

            return criterionByName && criterionByName.get('isApplied');
        },

        hydrate: function (criteria) {
            console.log('hydrate all');

            // not the most efficient: O(n^2)
            _.each(criteria, function (item) {
                var criterionName = item.name;
                var criterion = this.findWhere({'name': criterionName});
                if (criterion) {
                    criterion.hydrate(item);
                }
            }, this);
        },

        preserve: function () {
            console.log('SearchCriteria::preserve all');
            var criteria = [];
            this.each(function (criterion) {
                // or use _.invoke and pass array?
                criteria.push(criterion.preserve());
            });

            return { 'criteria' : criteria };
        },

        reset: function () {
            this.invoke('reset');
        }

    });

    return SearchCriteria;
});