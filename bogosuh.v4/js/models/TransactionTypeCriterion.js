/*global define*/
define([
    'apps/Repository',
    'models/Criterion',
    'collections/TreeCollection'
], function (Repository, Criterion, TreeCollection) {

    var TransactionTypeCriterion = Criterion.extend({

        initialize: function () {
            this.set({
                'name': 'TransactionType',
                'title': 'Transaction Type'
            });

            this.transactionTypes = Repository.transactionTypes;
        },

        hydrate: function (data) {
            var types = data.types,
                refId = data.id;
            // TODO - if (types && !_.isEmpty(types)) { do below }
            this.transactionTypes.selectByValues(types);
            this.setFilter(data.isApplied);
        },

        preserve: function () {
            // return {
            //     name: this.get('name'),
            //     isApplied: this.get('isApplied'),
            //     types: this.transactionTypes.selectedValues()
            // };

            var data = Criterion.prototype.preserve.call(this);
            data.types = this.transactionTypes.selectedValues();
            return data;
        },

        reset: function () {
            this.transactionTypes.selectByValues([]);
            this.removeFilter();
        },

        queryCriteria: function () {
            return {
                transactionType: {
                    $in: this.transactionTypes.selectedValues()
                }
            };
        },

        validate: function (attrs) {
            console.log('> TransactionTypeCriterion: validate');
            // when the criterion is applied, confirm if the criterion are set
            if (attrs.isApplied) {
                if (!this.transactionTypes.hasSelection()) {
                    return 'Cannot apply filter, nothing selected';
                }
            }
        }
    });

    return TransactionTypeCriterion;
    
});
