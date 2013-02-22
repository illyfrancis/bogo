define([
    "jquery",
    "underscore",
    "backbone",
    "views/AccountRow"
], function ($, _, Backbone, AccountRow) {

    var AccountList = Backbone.View.extend({

        initialize: function () {
            // collection = PaginatedAccounts
            this.listenTo(this.collection, "reset", this.render);
        },

        render: function () {
            this.disposeAccountRows();
            this.$el.empty();
            this.collection.each(this.appendAccountRow, this);
            return this;
        },

        remove: function () {
            this.disposeAccountRows();
            Backbone.View.prototype.remove.call(this);
            return this;
        },

        disposeAccountRows: function () {
            this.trigger("account-filter:dispose");
        },

        appendAccountRow: function (account) {
            var accountRow = new AccountRow({
                model: account
            });

            // register the accountRow for events.
            accountRow.listenTo(this, "account-filter:dispose", accountRow.remove);
            accountRow.listenTo(this, "account-filter:update", accountRow.updateSelection);

            this.$el.append(accountRow.render().el);
        },

        updateSelections: function (checked) {
            this.trigger("account-filter:update", checked);
        }

    });

    return AccountList;

});