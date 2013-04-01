define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'events/EventBus',
    'views/FilterSelector',
    'views/FilterManager',
    'text!templates/SearchFilters.html',
    'text!templates/Alert.html'
], function ($, _, Backbone, Bootstrap, EventBus, FilterSelector, FilterManager, tpl, tplAlert) {

    var SearchFilters = Backbone.View.extend({

        template: _.template(tpl),

        templateAlert: _.template(tplAlert),

        events: {
            'select .filter-select': 'onFilterChange',
            'click .toggle-filter': 'toggleFilter',
            'click .search-report': 'searchReport',
            'click .filter-killer': 'kill',
            'hidden': 'onHidden'
        },

        initialize: function () {
            // collection = SearchCriteria
            this.filterManager = new FilterManager(this.collection);
            this.filterManager.buildFilters();

            // should this be part of filter manager??? I think it should...
            this.filterSelector = new FilterSelector({
                collection: this.collection
            });

            this.registerEvents();

            // get the first criterion? set the current ...
            // TODO this.current
        },

        registerEvents: function () {
            this.listenTo(this.collection, 'error', this.onValidationError);
            this.listenTo(this.collection, 'change:isApplied', this.updateFilterButtonLabel);

            EventBus.on('filter:change', this.alertFilterChange, this);
            EventBus.on('filter:remove', this.alertFilterRemove, this);
        },

        render: function () {
            this.$el.html(this.template());
            // don't want extra outer div tag, reset the view.el
            var pane = this.$el.children('div:first').get(0);
            this.setElement(pane);

            // append filter selector
            this.$('.modal-body').prepend(this.filterSelector.render().el);

            // TODO add filter (which one???)
            // this.collection.each(this.appendFilter, this);
            // suppose grap the first criterion from the search criteria and get the name
            // then call selectfilter with the name.

            this.renderFilterContent(/* this.currentReportCriteria */);
            
            return this;
        },

        renderFilterContent: function (criterion) {
            // TODO - handle unknown/undefined filter view
            var selectedFilter = FilterManager.getFilter(criterion),
                $filterContent = this.$('.filter-content');
            // preserve event handlers etc (don't use $tabContent.empty() - which removes data, events etc)
            $filterContent.children().detach();
            $filterContent.append(selectedFilter.render().el);

            this.updateFilterButtonLabel(criterion);
        },

        updateFilterButtonLabel: function (criterion) {
            var buttonLabel = criterion.get('isApplied') ? 'Remove Filter' : 'Apply Filter',
                $buttonText = this.$('.modal-footer > .btn.toggle-filter > span');
            $buttonText.html(buttonLabel);
        },

        onFilterChange: function (e, criterionCid) {
            this.dismissAlerts();

            this.currentReportCriteria = this.collection.get(criterionCid);

            // TODO - this should be part of FilterSelector itself
            // update the filter type name
            this.$el.find('.filter-type .filter-name').text(this.currentReportCriteria.get('title'));

            this.renderFilterContent(this.currentReportCriteria);
        },

        alertFilterChange: function () {
            this.dismissAlerts();
            console.log('filter value changed');
            this.showAlert('filter values changed, do search again');
        },

        // alert using tooltip instead of alert (i think it's broken!!!)
        alertFilterRemove: function () {
            this.dismissAlerts();
            this.currentReportCriteria.toggleFilter();  // TODO - why this? I don't remember doing this!!??
            // init - can be moved to init() method
            var $btn = this.$el.find('.toggle-filter');
            $btn.tooltip({ // or popover
                title: 'Filters removed',
                content: 'You did this!',
                trigger: 'manual',
                placement: 'top'
            });
            // then show popover!
            $btn.tooltip('show'); // or popover
            // $btn.addClass('btn-danger');
            setTimeout(function () {
                $btn.tooltip('destroy'); // or popover
                // $btn.removeClass('btn-danger');
            }, 1000);
        },

        show: function (criterionName) {
            if (criterionName) {
                this.selectFilter(criterionName);
            }
            this.$el.modal();
        },

        hide: function () {
            this.$el.modal('hide');
        },

        selectFilter: function (criterionName) {
            var filterOption = this.filterSelector.getFilterOption(criterionName);

            if (filterOption) {
                filterOption.select();
            }
        },

        toggleFilter: function () {
            this.dismissAlerts();
            this.currentReportCriteria.toggleFilter();
        },

        searchReport: function () {
            this.dismissAlerts();
            if (this.collection.isReadyForSearch()) {
                this.hide();
                EventBus.trigger('startSearch');
            } else {
                this.showAlert('First set the search filter');
            }
        },

        onValidationError: function (model, error) {
            // TODO - this is too broad, need to narrow down for a specific error case.
            // or consider triggering a specific event instead.
            // show error message
            this.showAlert(error);
        },

        showAlert: function (message) {
            this.$el.find('.modal-body div.filter-content').prepend(this.templateAlert({
                message: message
            }));

            // if animating fade in, do this this.$('.alert').addClass('in'); and remove 'in' class from alert template
        },

        dismissAlerts: function () {
            // dismiss any alerts
            // this.$el.find('.modal-body > div .alert').alert('close');
            this.$('.modal-body > div .alert').remove();
        },

        onHidden: function () {
            console.log('hiding search criteria');
            this.dismissAlerts();
        },

        kill: function () {
            var index = this.$('.filter-index').val() || 0;
            var x = this.collection.at(index);  // should be Accounts
            FilterManager.removeFilter(x);
        }

    });

    return SearchFilters;

});