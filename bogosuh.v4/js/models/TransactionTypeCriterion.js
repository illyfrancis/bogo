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

        hydrate: function (selections) {
            var types = selections.types; // array
            var refId = selections.id;

            // get all leaves.
            // TODO - if (types && !_.isEmpty(types)) { do below }
            this.transactionTypes.selectByValues(types);

            if (selections.isApplied) {
                this.set('isApplied', selections.isApplied);
            }
        },
        
        preserve: function () {
            console.log('> TransactionTypeCriterion: preserve');
            // { name: 'TransactionType', isApplied: false, types: ['DVW','RVP','REC'], id: 'TR001' }
            // return {
            //     name: this.get('name'),
            //     isApplied: this.get('isApplied'),
            //     types: this.transactionTypes.selectedValues()
            // };

            var data = Criterion.prototype.preserve.call(this);
            data.types = this.transactionTypes.selectedValues();
            return data;
        },

        query: function () {
            console.log('> TransactionTypeCriterion: query');
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
