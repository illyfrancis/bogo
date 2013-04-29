define([
    'underscore',
    'backbone',
    'views/SecurityCategory',
    'text!templates/SecurityCategoryFilter.html'
], function (_, Backbone, SecurityCategory, tpl) {

    var SecurityCategoryFilter = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            'click .select-all': 'selectAll',
            'click .select-none': 'selectNone'
        },

        initialize: function () {
            // model = SecurityCategoryCriterion
            this.securityCategories = this.model.securityCategories;
        },

        render: function () {
            this.renderOnce();
            return this;
        },

        renderOnce: _.once(function () {
            this.$el.html(this.template());
            this.securityCategories.each(this.appendCategory, this);
        }),

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
       }

    });

    return SecurityCategoryFilter;

});