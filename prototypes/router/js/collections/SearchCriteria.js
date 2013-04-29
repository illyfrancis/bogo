/*global define*/
define(['underscore', 'backbone', 'models/Criterion'], function (_, Backbone, Criterion) {

    var SearchCriteria = Backbone.Collection.extend({

        model: Criterion,

        isReadyForSearch: function () {
            return this.any(function (criterion) {
                return criterion.get('isApplied');
            }, this);
        },

        _queryCriteria: function () {
            // TODO - instead of _.map use _.each to combine both map & where into one.
            var criteria = _.reduce(_.map(this.where({isApplied: true}), this.mapper), this.reducer, {});
            return JSON.stringify(criteria);
        },

        mapper: function (criterion) {
            return criterion.queryCriteria();
        },

        reducer: function (memo, queryCriteria, key, list) {
            if (_.isObject(queryCriteria)) {
                _.extend(memo, queryCriteria);
            }

            return memo;
        },

        queryCriteria: function () {
            var queryCriteria, criteria = {};
            this.each(function (criterion) {
                if (criterion.get('isApplied')) {
                    queryCriteria = criterion.queryCriteria();
                    if (_.isObject(queryCriteria)) {
                        _.extend(criteria, queryCriteria);
                    }
                }
            });

            return JSON.stringify(criteria);
        },

        isCriterionApplied: function (criterionName) {
            // get criterion by name
            var criterion = this.findWhere({'name': criterionName});
            return criterion && criterion.get('isApplied');
        },

        hydrate: function (criteria) {
            // TODO - review, not the most efficient: O(n^2)
            _.each(criteria, function (item) {
                var criterionName = item.name;
                var criterion = this.findWhere({'name': criterionName});
                if (criterion) {
                    criterion.hydrate(item);
                }
            }, this);
        },

        preserve: function () {
            var criteria = [];
            this.each(function (criterion) {
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