define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'views/AccountList',
    'views/AccountPaginator',
    'text!templates/AccountFilter.html'
], function (_, Backbone, EventBus, AccountList, AccountPaginator, tpl) {

    var AccountFilter = Backbone.View.extend({

        className: 'account-search',

        template: _.template(tpl),

        events: {
            'click .select-all': 'selectAll',
            'click .select-none': 'selectNone',

            // sort is very slow in IE, inefficient paginator logic
            // 'click .sort-number': 'sortNumber',
            // 'click .sort-name': 'sortName',

            'keyup input.account-number': 'filterUpdate',
            'keyup input.account-name': 'filterUpdate',
            'click .selections-on': 'filterSelectedAccounts',
            'click .selections-off': 'filterNotSelected',
            'click .selections-both': 'filterOff'
        },

        sortName: function () {
            var direction = 'desc';
            if (this.accounts.sortDirection === 'desc') {
                direction = 'asc';
            }
            this.accounts.setSort('name', direction);

            var foo = this.accounts.sortDirection === 'desc' ? 'caret' : 'caron';
            this.$('.sort-number span').removeClass('caret caron');
            this.$('.sort-name span').removeClass('caret caron').addClass(foo);
        },

        sortNumber: function () {
            var direction = 'desc';
            if (this.accounts.sortDirection === 'desc') {
                direction = 'asc';
            }
            this.accounts.setSort('number', direction);

            var foo = this.accounts.sortDirection === 'desc' ? 'caron' : 'caret';
            this.$('.sort-name span').removeClass('caret caron');
            this.$('.sort-number span').removeClass('caret caron').addClass(foo);
        },

        initialize: function () {
            // model = AccountCriterion
            this.accounts = this.model.accounts;
            this.accountFilterSelection = null; // filter selection state

            this.listenTo(this.accounts, 'change:selected', this.filterChanged);

            this.accountList = this.createSubView(AccountList, {
                collection: this.accounts
            });

            this.paginator = this.createSubView(AccountPaginator, {
                collection: this.accounts
            });

            // throttled version of filterAccounts function
            this.filterUpdate = _.throttle(this.filterAccounts, 800);
        },

        render: function () {
            this.renderOnce();
            return this;
        },

        renderOnce: _.once(function () {
            this.$el.empty();
            this.$el.html(this.template());

            // account list
            this.accountList.setElement(this.$('.account-list table tbody')).render();

            // account paginator
            this.paginator.setElement(this.$('.account-pagination')).render();
        }),

        _renderOnce: function () {
            this.$el.empty();
            this.$el.html(this.template());

            // account list
            this.accountList.setElement(this.$('.account-list table tbody')).render();

            // account paginator
            this.paginator.setElement(this.$('.account-pagination')).render();
        },

        filterChanged: function () {
            // decide if filter value change should be tracked by SearchFilter, if so trigger 'filter change' event.
            if (this.model.get('isApplied')) {
                if (!this.accounts.hasSelection()) {
                    // remove this filter when there's no selection.
                    this.model.removeFilter();
                    EventBus.trigger('filter:remove', this.model);
                } else {
                    EventBus.trigger('filter:change');
                }
            }
        },

        selectAll: function () {
            this.updateAccountSelection(true);
        },

        selectNone: function () {
            this.updateAccountSelection(false);
        },

        updateAccountSelection: function (checked) {
            // perceived performance improvement - rather than relying on collection to trigger
            // change event then AccountRow to re- render, invoke on visible AccountRow(s) to update
            // the model directly. The updates to the collection is silent so it will not trigger
            // the change events.
            this.accountList.updateSelections(checked);
            this.accounts.selectAll(checked);
        },

        filterSelectedAccounts: function () {
            this.filterBySelection(true);
        },

        filterNotSelected: function () {
            this.filterBySelection(false);
        },

        filterOff: function () {
            this.filterBySelection(null);
        },

        filterBySelection: function (filterValue) {
            // only if filter value is changed
            if (this.accountFilterSelection != filterValue) {
                this.accountFilterSelection = filterValue;
                this.filterAccounts();
            }
        },

        filterAccounts: function () {
            var name = this.$('.account-name').val(),
                number = this.$('.account-number').val(),
                fieldFilters = []; // build the filter fields based on selection

            // filter by number
            if(!_.isEmpty(number)) {
                fieldFilters.push({ field: 'number', type: 'pattern', value: new RegExp('^' + number, 'igm') });
            }

            // filter by name
            if(!_.isEmpty(name)) {
                fieldFilters.push({ field: 'name', type: 'pattern', value: new RegExp('^' + name, 'igm') });
            }

            // filter by selection
            if (!_.isNull(this.accountFilterSelection)) {
                fieldFilters.push({ field: 'selected', type: 'equalTo', value: this.accountFilterSelection });
            }

            this.accounts.setFieldFilter(fieldFilters);
        }

    });

    return AccountFilter;
});