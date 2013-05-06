define([
    'underscore',
    'backbone',
    'views/AccountRow'
], function (_, Backbone, AccountRow) {

    var AccountList = Backbone.View.extend({

        initialize: function () {
            // collection = Accounts
            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function () {
            this.disposeSubViews();
            this.$el.empty();
            this.collection.each(this.appendAccountRow, this);
            return this;
        },

        appendAccountRow: function (account) {
            var accountRow = this.createSubView(AccountRow, {
                model: account
            });

            // register the accountRow for events.
            accountRow.listenTo(this, 'account-filter:update', accountRow.updateSelection);

            this.$el.append(accountRow.render().el);
        },

        updateSelections: function (checked) {
            this.trigger('account-filter:update', checked);
        }

    });

    return AccountList;

});