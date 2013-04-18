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
            this.accounts = Repository.accounts();
        },

        hydrate: function (data) {
            // expect data is in the form of { accountNumbers: [array of numbers], isApplied: boolean}
            var invalid = _.isUndefined(data) || _.isUndefined(data.accountNumbers) || _.isUndefined(data.isApplied),
                valid = !invalid && _.isArray(data.accountNumbers) && _.isBoolean(data.isApplied);

            if (valid) {
                this.accounts.selectBy(data.accountNumbers);
                this.setFilter(data.isApplied);
            }
        },

        preserve: function () {
            // Style 1. ------------------------
            // return {
            //     name: this.get('name'),
            //     isApplied: this.get('isApplied'),
            //     accountNumbers: this.accounts.selectedAccountNumbers()
            // };

            // vs Style 2. ---------------------
            var data = Criterion.prototype.preserve.call(this);
            data.accountNumbers = this.accounts.selectedAccountNumbers();
            return data;
        },

        reset: function () {
            this.accounts.clearSelections();
            this.removeFilter();
        },

        queryCriteria: function () {
            // TODO - the column name 'accountNumber' should be managed in a single place,
            // currently the assumption is ReportSchema should maintain it but by specifying it
            // here again, kinda breaks that...
            return {
                accountNumber: {
                    $in: this.accounts.selectedAccountNumbers()
                }
            };
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