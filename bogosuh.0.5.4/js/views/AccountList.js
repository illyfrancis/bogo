define([
    'underscore',
    'backbone',
    'views/AccountRow',
    'text!templates/AccountRowEmpty.html'
], function (_, Backbone, AccountRow, tpl) {

    var AccountList = Backbone.View.extend({

        initialize: function () {
            // collection = Accounts
            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function () {
            this.disposeSubViews();
            if (this.collection.length === 0) {
                this.appendAccountEmptyRow();
            } else {
                this.collection.each(this.appendAccountRow, this);
            }
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

        appendAccountEmptyRow: function () {
            var emptyRow = this.createSubView(Backbone.View, {
                tagName: 'tr',
                className: 'muted'
            });
            emptyRow.$el.html(tpl);
            this.$el.append(emptyRow.el);
        },

        updateSelections: function (checked) {
            this.trigger('account-filter:update', checked);
        }

    });

    return AccountList;

});