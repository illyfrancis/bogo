define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'views/FilterStatusBar',
    'views/PreferenceDropdown',
    'views/PreferencePopup',
    'text!templates/SearchMenu.html'
], function (_, Backbone, EventBus, FilterStatusBar, PreferenceDropdown, PreferencePopup, tpl) {

    var SearchMenu = Backbone.View.extend({

        className: 'search-menu',

        template: _.template(tpl),

        events: {
            'click .report-search:not(".disabled")': 'reportSearch',
            'click .report-settings:not(".disabled")': 'reportSettings',
            'click .add-filters': 'showFilters',
            'click .load-preference:not(".disabled")': 'loadPreference',
            'click .save-preference:not(".disabled")': 'savePreference',
            'click .filter-collapse a': 'collapseFilterStatus'
        },

        initialize: function () {
            // collection is SearchCriteria
            this.listenTo(this.collection, 'change:isApplied', this.toggleSearchButton);
        },

        render: function () {
            this.$el.empty();
            this.$el.html(this.template());
            this.toggleSearchButton();

            var preferenceDropdown = this.createSubView(PreferenceDropdown);
            this.$('.preferences').replaceWith(preferenceDropdown.render().el);
            // preferenceDropdown.setElement(this.$('.preferences'));
            // preferenceDropdown.render();+

            var filterStatusBar = this.createSubView(FilterStatusBar, {
                collection: this.collection
            });
            this.$('.filter-status').append(filterStatusBar.render().el);

            // preference dropdown
            var preferencePopup = this.createSubView(PreferencePopup);
            this.$el.append(preferencePopup.render().el);

            return this;
        },

        reportSearch: function () {
            EventBus.trigger('search');
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

        collapseFilterStatus: function () {
            this.$('.filter-status').toggle();
            this.$('.filter-collapse i').toggleClass('icon-chevron-up icon-chevron-down');
        },

        loadPreference: function () {
            EventBus.trigger('loadPreference');
        },

        savePreference: function () {
            EventBus.trigger('savePreference');
        }

    });

    return SearchMenu;

});