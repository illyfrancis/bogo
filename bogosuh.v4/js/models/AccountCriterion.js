define([
    'models/Criterion',
    'apps/Repository'
], function (Criterion, Repository) {

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
        },

        preserve: function () {
            console.log('> account criteria: preserve');
            this.get('restrictions').accountNumbers = [2];
        },

        query: function () {
            console.log('> account criteria: ');
            return this.accounts.selectedAccountNumbers();
        },

        validate: function (attrs) {
            // when the criteria is applied, confirm if  the criteria are set
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