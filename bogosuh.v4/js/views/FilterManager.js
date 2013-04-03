/*global define,require*/
define([
    'underscore',
    'models/AccountCriterion',
    'models/SecurityCategoryCriterion',
    'models/SecurityIdCriterion',
    'models/SettlementDateCriterion',
    'models/SettlementLocationCriterion',
    'models/TransactionTypeCriterion',
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
            var criteriaByName = ['Account', 'TransactionType', 'SecurityId', 'SecurityCategory', 'SettlementDate', 'SettlementLocation'];
            _.each(criteriaByName, function (criterionName) {
                this.createCriterionAndFilter(criterionName);
            }, this);
        },

        createCriterionAndFilter: function (criterionName) {

            // TODO - catch error in case criterion is not defined
            // what should we do?
            try {
                var foo = this.createCriterion(criterionName);
            } catch (error) {
                console.log(">> foo not defined");
            }

            var criterion = this.createCriterion(criterionName);
            this.searchCriteria.add(criterion);

            var filter = this.createFilter(criterionName, criterion);
            return filter;
        },

        createCriterion: function (criterionName) {
            var Criterion = require('models/' + criterionName + 'Criterion');
            return new Criterion();
        },

        createFilter: function (criterionName, criterion) {
            var FilterClass = require('views/' + criterionName + 'Filter');
            var filter = new FilterClass({model: criterion});
            this.filters[criterionName] = filter;
            return filter;
        },

        getFilter: function (criterion) {
            var criterionName = criterion.get('name');
            var filter = this.filters[criterionName];
            if (!filter) {
                filter = this.createFilter(criterionName, criterion);
            }
            return filter;
        },

        disposeFilter: function (criterion) {
            var criterionName = criterion.get('name');
            var filter = this.filters[criterionName];
            if (filter) {
                filter.dispose();
                delete this.filters[criterionName];
            }
        }

    });

    return FilterManager;

});