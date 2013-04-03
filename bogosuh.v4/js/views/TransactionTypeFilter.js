define([
    'jquery',
    'underscore',
    'backbone',
    'apps/EventBus',
    'views/Tree'
], function ($, _, Backbone, EventBus, Tree) {

    var TransactionTypeFilter = Backbone.View.extend({

        initialize: function () {
            // model = TransactionTypeCriterion
            this.listenTo(this.model.transactionTypes, 'childChange', this.filterChanged);

            this.transactionTypesTree = this.createSubView(Tree, {
                collection: this.model.transactionTypes
            });

            this._render();
        },

        filterChanged: function () {
            // decide if filter value change should be tracked by SearchFilter, if so trigger 'filter change' event.
            if (this.model.get('isApplied')) {
                if (!this.model.transactionTypes.hasSelection()) {
                    EventBus.trigger('filter:remove');
                } else {
                    EventBus.trigger('filter:change');
                }
            }
        },

        _render: function () {
            this.$el.append(this.transactionTypesTree.render().el);
            this.transactionTypesTree.refresh(); // this many need to be fired after render.
        }

    });

    return TransactionTypeFilter;

});