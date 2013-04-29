define([
    'underscore',
    'backbone',
    'bootstrap',
    'apps/EventBus',
    'views/FilterSelector',
    'views/FilterManager',
    'text!templates/SearchFilters.html',
    'text!templates/Alert.html'
], function (_, Backbone, Bootstrap, EventBus, FilterSelector, FilterManager, tpl, tplAlert) {

    var SearchFilters = Backbone.View.extend({

        template: _.template(tpl),

        templateAlert: _.template(tplAlert),

        events: {
            'select .filter-select': 'onFilterSelect',
            'click .toggle-filter': 'toggleFilter',
            'click .search-report': 'searchReport',
            'click .filter-killer': 'kill',
            'hidden': 'onHidden'
        },

        initialize: function () {
            // collection = SearchCriteria
            this.filterManager = new FilterManager(this.collection);
            this.filterManager.buildFilters();

            this.filterSelector = this.createSubView(FilterSelector, {
                collection: this.collection
            });
            
            this.registerEvents();

            // select the first one as default
            this.selectedCriterion = this.collection.at(0);
        },

        registerEvents: function () {
            this.listenTo(this.collection, 'error', this.onValidationError);
            this.listenTo(this.collection, 'change:isApplied', this.updateFilterButtonLabel);

            this.listenTo(EventBus, 'filter:change', this.alertFilterChange);
            this.listenTo(EventBus, 'filter:remove', this.alertFilterRemove);
        },

        render: function () {
            this.$el.html(this.template());
            // don't want extra outer div tag, reset the view.el
            var pane = this.$el.children('div:first').get(0);
            this.setElement(pane);

            this.$('.modal-body').prepend(this.filterSelector.render(this.selectedCriterion).el);
            this.renderFilterContent(this.selectedCriterion);
            
            return this;
        },

        renderFilterContent: function (criterion) {
            // TODO - handle unknown/undefined filter view
            var selectedFilter = this.filterManager.getFilter(criterion),
                $filterContent = this.$('.filter-content');
            // preserve event handlers etc (don't use $tabContent.empty() - which removes data, events etc)
            $filterContent.children().detach();
            $filterContent.append(selectedFilter.render().el);

            this.updateFilterButtonLabel(criterion);
        },

        updateFilterButtonLabel: function (criterion) {
            // only update if the criterion is currently selected
            if (criterion && criterion === this.selectedCriterion) {
                var buttonLabel = criterion.get('isApplied') ? 'Remove Filter' : 'Apply Filter',
                    $buttonText = this.$('.modal-footer > .btn.toggle-filter > span');
                $buttonText.html(buttonLabel);
            }
        },

        onFilterSelect: function (e, criterionCid) {
            if (this.selectedCriterion.cid !== criterionCid) {
                this.dismissAlerts();
                this.selectedCriterion = this.collection.get(criterionCid);
                this.renderFilterContent(this.selectedCriterion);
            }
        },

        show: function (criterionName) {
            if (criterionName) {
                this.filterSelector.selectByName(criterionName);
            }
            this.$el.modal();
        },

        hide: function () {
            this.$el.modal('hide');
        },

        toggleFilter: function () {
            this.dismissAlerts();
            this.selectedCriterion.toggleFilter();
        },

        searchReport: function () {
            this.dismissAlerts();
            if (this.collection.isReadyForSearch()) {
                this.hide();
                EventBus.trigger('search');
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

        alertFilterChange: function () {
            this.dismissAlerts();
            console.log('filter value changed');
            this.showAlert('filter values changed, do search again');
        },

        alertFilterRemove: function () {
            this.dismissAlerts();

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

        onHidden: function () {
            console.log('hiding search criteria');
            this.dismissAlerts();
        },

        kill: function () {
            var index = this.$('.filter-index').val() || 0;
            var x = this.collection.at(index);  // should be Accounts
            this.filterManager.disposeFilter(x);
        }

    });

    return SearchFilters;

});