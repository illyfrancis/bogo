define([
    "jquery",
    "underscore",
    "backbone",
    "apps/EventBus",
    "views/Tree"
], function ($, _, Backbone, EventBus, Tree) {

    var TransactionTypeFilter = Backbone.View.extend({

        initialize: function () {
            // model = TransactionTypeCriterion
            this.listenTo(this.model.transactionTypes(), "childChange", this.filterChanged);

            this.transactionTypes = new Tree({
                collection: this.model.transactionTypes()
            });

            this._render();
        },

        filterChanged: function () {
            // decide if filter value change should be tracked by SearchFilter, if so trigger "filter change" event.
            if (this.model.get("isApplied")) {
                if (!this.model.transactionTypes().hasSelection()) {
                    EventBus.trigger("filter:remove");
                } else {
                    EventBus.trigger("filter:change");
                }
            }
        },

        _render: function () {
            this.$el.append(this.transactionTypes.render().el);
            this.transactionTypes.refresh(); // this many need to be fired after render.
        },

        remove: function () {
            this.transactionTypes.remove();
            Backbone.View.prototype.remove.call(this);
            return this;
        }

    });

    return TransactionTypeFilter;

});