define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'views/SecurityCategory',
    'text!templates/SecurityCategoryFilter.html'
], function (_, Backbone, EventBus, SecurityCategory, tpl) {

    var SecurityCategoryFilter = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            'click .select-all': 'selectAll',
            'click .select-none': 'selectNone'
        },

        initialize: function () {
            // model = SecurityCategoryCriterion
            this.securityCategories = this.model.securityCategories;
            this.listenTo(this.securityCategories, 'change:selected', this.filterChanged);
        },

        render: function () {
            this.renderOnce();
            return this;
        },

        renderOnce: _.once(function () {
            this.$el.html(this.template());
            this.securityCategories.each(this.appendCategory, this);
        }),

        _renderOnce: function () {
            this.$el.html(this.template());
            this.securityCategories.each(this.appendCategory, this);
        },

        appendCategory: function (securityCategory) {
            var category = this.createSubView(SecurityCategory, {
                model: securityCategory
            });
            this.$('tbody').append(category.render().el);
        },

        selectAll: function () {
            this.securityCategories.invoke('select', true);
        },

        selectNone: function () {
            this.securityCategories.invoke('select', false);
       },

        filterChanged: function () {
            // decide if filter value change should be tracked by SearchFilter, if so trigger 'filter change' event.
            if (this.model.get('isApplied')) {
                if (!this.securityCategories.hasSelection()) {
                    // remove this filter when there's no selection.
                    this.model.removeFilter();
                    EventBus.trigger('filter:remove', this.model);
                } else {
                    EventBus.trigger('filter:change');
                }
            }
        }


    });

    return SecurityCategoryFilter;

});