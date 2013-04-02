define([
    'jquery',
    'underscore',
    'backbone',
    'apps/EventBus',
    'text!templates/ReportColumnHeader.html'
], function ($, _, Backbone, EventBus, tpl) {

    var ReportColumnHeader = Backbone.View.extend({

        tagName: 'th',

        className: '',

        template: _.template(tpl),

        events: {
            'click': 'updateSortForSearch',
            'click i': 'showFilter'
        },

        initialize: function (options) {
            // model = ReportColumn
            this.searchCriteria = options.searchCriteria;
            this.listenTo(this.searchCriteria, 'change:isApplied', this.render);
        },

        showFilter: function (e) {
            e.stopPropagation();
            var criterionName = this.model.get('criterion');
            EventBus.trigger('showFilters', criterionName);
        },

        updateSortForSearch: function (e) {
            this.model.reverseSort();
            EventBus.trigger('startSearch');
        },

        render: function () {
            // TODO displose view
            this.$el.empty();
            this.$el.html(this.template(this.model.toJSON()));

            // adjust filter icon according to criteria's applied state.
            if (this.searchCriteria.isCriterionApplied(this.model.get('criterion'))) {
                this.$('i').removeClass('icon-white');
            }

            this.updateSortDirection();

            return this;
        },

        updateSortDirection: function () {
            var $sortDirection = this.$('span.pull-right');
            $sortDirection.removeClass('caret caron');

            if (this.model.isSortAsc()) {
                $sortDirection.addClass('caret');
            } else if (this.model.isSortDesc()) {
                $sortDirection.addClass('caron');
            }
        }

    });

    return ReportColumnHeader;

});