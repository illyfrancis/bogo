/*global define*/
define([
    'models/Criterion',
    'collections/TreeCollection'
], function (Criterion, TreeCollection) {

    var TransactionTypeCriterion = Criterion.extend({

        initialize: function () {
            this.set({
                'name': 'TransactionType',
                'title': 'Transaction Type'
            });
        },

        transactionTypes: function () {
            if (this.types === undefined) {
                this.types = new TreeCollection();
                this.types.reset(app.data.transactionTypes);
            }
            return this.types;
        },

        hydrate: function (selections) {
            var types = selections.types; // array
            var refId = selections.id;

            // get all leaves.
            // TODO - if (types && !_.isEmpty(types)) { do below }
            this.transactionTypes().selectByValues(types);
        },
        preserve: function () {
            console.log('> TransactionTypeCriterion: preserve');
            // this.get('restrictions').accountNumbers = [2];
            // this.transactionTypes().selectedValues()
        },

        query: function () {
            console.log('> TransactionTypeCriterion: query');
        },

        validate: function (attrs) {
            console.log('> TransactionTypeCriterion: validate');
            // when the criterion is applied, confirm if the criterion are set
            if (attrs.isApplied) {
                if (!this.transactionTypes().hasSelection()) {
                    return 'Cannot apply filter, nothing selected';
                }
            }
        }
    });

    return TransactionTypeCriterion;
    
});
