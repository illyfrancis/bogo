define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'views/FilterStatusBadge',
    'text!templates/FilterStatusBar.html'
], function (_, Backbone, EventBus, FilterStatusBadge, tpl) {

    var FilterStatusBar = Backbone.View.extend({

        tagName: 'div',

        className: 'filter-bar',

        template: _.template(tpl),

        events: {
            'click .add-filters': 'showFilters'
        },

        initialize: function () {
            // collection = SearchCriteria
            this.listenTo(this.collection, 'change:isApplied', this.updateView);
        },

        updateView: function (criterion) {
            // only do partial update
            if(criterion.get('isApplied')) {
                this.addFilterBadge(criterion);
            }
        },

        showFilters: function () {
            EventBus.trigger('showFilters');
        },

        render: function () {
            this.$el.empty();
            this.$el.html(this.template());
            this.renderFilterBadges();
            return this;
        },

        renderFilterBadges: function () {
            var filtersApplied = this.collection.where({
                isApplied: true
            });
            _.each(filtersApplied, this.addFilterBadge, this);
        },

        addFilterBadge: function (filter) {
            var filterBadge = this.createSubView(FilterStatusBadge, {
                model: filter
            });
            this.$el.prepend(filterBadge.render().el);
        }

    });

    return FilterStatusBar;

});