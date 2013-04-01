/*global define,require*/
define([
    'underscore',
    'models/AccountCriterion',
    // 'models/DateRangeCriterion',
    // 'models/SecurityCategoryCriterion',
    // 'models/SecurityIdCriterion',
    // 'models/SettlementDateCriterion',
    // 'models/SettlementLocationCriterion',
    // 'models/TransactionTypeCriterion',
    'views/AccountFilter',
    'views/DateRangeFilter',
    'views/SecurityCategoryFilter',
    'views/SecurityIdFilter',
    'views/SettlementDateFilter',
    'views/SettlementLocationFilter',
    'views/TransactionTypeFilter'
], function (_) {

    var FilterManager = function (criteria) {
        this.searchCriteria = criteria;
        this.filters = {};
    };

    _.extend(FilterManager.prototype, {
        buildFilters: function (searchCriteria) {
            // configure filters by criteria
            var criteriaByName = ['Account', 'TransactionType', 'SecurityId'];
            _.each(criteriaByName, function (criterionName) {
                this.createCriterionAndFilter(criterionName);
            });
        },

        createCriterionAndFilter: function (criterionName) {
            var criterion = this.createCriterion(criterionName);
            this.searchCriteria.add(criterion);

            var Filter = this.createFilter(criterionName, criterion);
            this.filters[criterionName] = filter;
            return filter;
        },

        createCriterion: function (criterionName) {
            var Criterion = require('models/' + criterionName + 'Criterion');
            return new Criterion();
        },

        createFilter: function (criterionName, criterion) {
            var Filter = require('views/' + criterionName + 'Filter');
            return Filter({model: criterion});
        },

        getFilter: function (criterion) {
            var criterionName = criterion.get('name');
            var filter = this.filters[criterionName];
            if (!filter) {
                // need a new filter
                filter = this.createFilter(criterionName, criterion);
            }

            return filter;
        },

        removeFilter: function (criterion) {
            var criterionName = criterion.get('name');
            var filter = this.filters[criterionName];
            if (filter) {
                filter.remove();
                delete this.filters[criterionName];
            }
        }

    });

    return FilterManager;

});