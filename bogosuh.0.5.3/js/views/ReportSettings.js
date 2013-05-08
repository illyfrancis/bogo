define([
    'underscore',
    'backbone',
    'bootstrap',
    'apps/EventBus',
    'views/ReportColumnSelector',
    'text!templates/ReportSettings.html'
], function (_, Backbone, Bootstrap, EventBus, ReportColumnSelector, tpl) {

    var ReportSettings = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            'click .search-report:not(".disabled")': 'searchReport',
            'click .reset': 'resetReportSchema'
        },

        initialize: function () {
            // collection = ReportSchema
            this.reportColumnSelector = new ReportColumnSelector({
                collection: this.collection
            });

            // options.searchCriteria = SearchCriteria
            this.listenTo(this.options.searchCriteria, 'change:isApplied', this.toggleSearchButton);
            this.listenTo(EventBus, 'showReportSettings', this.show);
        },

        render: function () {
            console.log('rendering ReportSettings');
            this.$el.html(this.template());

            // don't want extra outer div tag, reset the view.el
            var pane = this.$el.children('div:first').get(0);
            this.setElement(pane);

            this.renderReportColumnSelector();
            this.toggleSearchButton();
            return this;
        },

        renderReportColumnSelector: function () {
            this.$('.modal-body div').append(
                this.reportColumnSelector.render().el);
        },

        toggleSearchButton: function () {
            this.$('.search-report').toggleClass('disabled',
                !this.options.searchCriteria.isReadyForSearch());
        },

        show: function () {
            this.$el.modal();
        },

        hide: function () {
            this.$el.modal('hide');
        },

        searchReport: function () {
            this.hide();
            EventBus.trigger('search');
        },

        resetReportSchema: function () {
            EventBus.trigger('resetReportSchema');
        }
    });

    return ReportSettings;

});