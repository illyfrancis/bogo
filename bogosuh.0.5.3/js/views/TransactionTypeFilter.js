define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'views/Tree'
], function (_, Backbone, EventBus, Tree) {

    var TransactionTypeFilter = Backbone.View.extend({

        initialize: function () {
            // model = TransactionTypeCriterion
            this.listenTo(this.model.transactionTypes, 'change:selected', this.filterChanged);

            this.transactionTypesTree = this.createSubView(Tree, {
                collection: this.model.transactionTypes
            });

            this.renderOnce();  // need to have DOM when hydrate
        },

        filterChanged: function () {
            // decide if filter value change should be tracked by SearchFilter, if so trigger 'filter change' event.
            if (this.model.get('isApplied')) {
                if (!this.model.transactionTypes.hasSelection()) {
                    // remove this filter when there's no selection.
                    this.model.removeFilter();
                    EventBus.trigger('filter:remove', this.model);
                } else {
                    EventBus.trigger('filter:change');
                }
            }
        },

        render: function () {
            this.renderOnce();
            return this;
        },

        renderOnce: _.once(function () {
            this.$el.append(this.transactionTypesTree.render().el);
        })

    });

    return TransactionTypeFilter;

});