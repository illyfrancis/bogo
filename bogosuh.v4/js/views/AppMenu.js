define([
    'jquery',
    'underscore',
    'backbone',
    'apps/EventBus',
    'text!templates/AppMenu.html'
], function ($, _, Backbone, EventBus, tpl) {

    var AppMenu = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            'click .report-search:not(".disabled")': 'reportSearch',
            'click .report-settings:not(".disabled")': 'reportSettings',
            'click .add-filters': 'showFilters',
            'click .load-preference:not(".disabled")': 'loadPreference'
        },

        initialize: function () {
            // collection is SearchCriteria
            this.listenTo(this.collection, 'change:isApplied', this.toggleSearchButton);
        },

        render: function () {
            this.$el.empty();
            this.$el.html(this.template());
            this.toggleSearchButton();

            return this;
        },

        reportSearch: function () {
            EventBus.trigger('startSearch');
        },

        reportSettings: function () {
            EventBus.trigger('showReportSettings');
        },

        showFilters: function () {
            EventBus.trigger('showFilters');
        },

        toggleSearchButton: function () {
            this.$('.report-search').toggleClass('disabled', !this.collection.isReadyForSearch());
        },

        loadPreference: function () {
            EventBus.trigger('loadPreference');
        }

    });

    return AppMenu;

});