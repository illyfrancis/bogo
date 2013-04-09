define([
    'apps/Repository',
    'models/Criterion'
], function (Repository, Criterion) {

    var AccountCriterion = Criterion.extend({

        initialize: function () {
            this.set({
                'name': 'Account',
                'title': 'Account'
            });

            // expect that the accounts are loaded.
            this.accounts = Repository.accounts;
        },

        hydrate: function (selections) {
            // apply restrictions to accounts
            var accountNumbers = selections.accountNumbers;
            this.accounts.selectBy(accountNumbers);
            // Q: should it first unselect all previously selected accounts?

            if (selections.isApplied) {
                this.set('isApplied', selections.isApplied);
            }
        },

        preserve: function () {
            console.log('> account criterion: preserve');
            // this.get('restrictions').accountNumbers = [2];

            // { name: 'Account', isApplied: false, accountNumbers: ['123', '234'] },

            return {
                name: this.get('name'),
                isApplied: this.get('isApplied'),
                accountNumbers: this.accounts.selectedAccountNumbers()
            };
        },

        query: function () {
            console.log('> account criterion: ');
            return this.accounts.selectedAccountNumbers();
        },

        validate: function (attrs) {
            // when the criterion is applied, confirm if  the criterion are set
            if (attrs.isApplied) {
                if (this.accounts && !this.accounts.hasSelection()) {
                    // TODO - better error message
                    return 'Cannot apply filter, nothing selected';
                }
            }
        }

    });

    return AccountCriterion;

});