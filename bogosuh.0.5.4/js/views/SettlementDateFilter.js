define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'views/DateRangeFilter'
], function (_, Backbone, EventBus, DateRangeFilter) {

    var SettlementDateFilter = Backbone.View.extend({

        initialize: function () {
            // model = SettlementDateCriterion
            this.settlementDatesFilter = this.createSubView(DateRangeFilter, {
                model: this.model.settlementDates
            });

            this.listenTo(this.model.settlementDates, 'change', this.filterChanged);

        },

        render: function () {
            console.log('SettlementDateFilter: render');
            this.renderOnce();
            return this;
        },

        renderOnce: _.once(function () {
            this.$el.empty().append(this.settlementDatesFilter.render().el);
        }),

        _renderOnce: function () {
            this.$el.empty().append(this.settlementDatesFilter.render().el);
        },

        filterChanged: function () {
            // decide if filter value change should be tracked by SearchFilter, if so trigger 'filter change' event.
            if (this.model.get('isApplied')) {
                EventBus.trigger('filter:change');
            }
        }

    });

    return SettlementDateFilter;
});