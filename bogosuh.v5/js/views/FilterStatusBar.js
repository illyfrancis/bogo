define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'views/FilterStatusBadge',
    'text!templates/FilterStatusBar.html'
], function (_, Backbone, EventBus, FilterStatusBadge, tpl) {

    var FilterStatusBar = Backbone.View.extend({

        tagName: 'div',

        className: 'filters-list',

        template: _.template(tpl),

        initialize: function () {
            // collection = SearchCriteria
            this.listenTo(this.collection, 'change:isApplied', this.render);
        },

        render: function () {
            this.disposeSubViews();
            this.$el.empty();

            var filtersApplied = this.collection.where({isApplied: true});
            
            this.$el.html(this.template({empty: filtersApplied.length === 0}));
            this.renderFilterBadges(filtersApplied);
            return this;
        },

        renderFilterBadges: function (filtersApplied) {
            _.each(filtersApplied, this.addFilterBadge, this);
        },

        addFilterBadge: function (filter) {
            var filterBadge = this.createSubView(FilterStatusBadge, {
                model: filter
            });
            this.$el.append(filterBadge.render().el);
        }

    });

    return FilterStatusBar;

});