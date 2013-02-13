define([
    "jquery",
    "underscore",
    "backbone",
    "views/Tree"
], function ($, _, Backbone, Tree) {

    var TransactionTypeFilter = Backbone.View.extend({

        initialize: function () {
            // model = ReportCriteria (TransactionTypeCriteria)
            this.model.transactionTypes().on("childChange", this.filterChanged, this);

            this.transactionTypes = new Tree({
                collection: this.model.transactionTypes()
            });

            this.$el.append(this.transactionTypes.render().el);
            this.transactionTypes.refresh(); // this many need to be fired after render.
        },

        filterChanged: function () {
            // decide if filter value change should be tracked by SearchFilter, if so trigger "filter change" event.
            if (this.model.get("isApplied")) {
                if (!this.model.transactionTypes().hasSelection()) {
                    app.EventBus.trigger("filter:remove");
                } else {
                    app.EventBus.trigger("filter:change");
                }
            }
        },

        render: function () {
            // this.transactionTypes.refresh(); // this many need to be fired after render.
            return this;
        }

    });

    return TransactionTypeFilter;

});