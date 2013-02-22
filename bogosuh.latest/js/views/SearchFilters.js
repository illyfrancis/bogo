define([
    "jquery",
    "underscore",
    "backbone",
    "bootstrap",
    "views/SearchFilterSelector",
    "views/SearchFilterHelper",
    "text!templates/SearchFilters.html",
    "text!templates/Alert.html"
], function ($, _, Backbone, Bootstrap, SearchFilterSelector, Helper, tpl, tplAlert) {

    var SearchFilters = Backbone.View.extend({

        template: _.template(tpl),

        templateAlert: _.template(tplAlert),

        events: {
            "click .toggle-filter": "toggleFilter",
            "click .filter-killer": "kill",
            "click .search-report": "searchReport",
            // "change .filter-type select": "onSelectChange",
            "change .filter-type": "onSelectChange",
            "hidden": "onHidden"
        },

        initialize: function () {
            // collection = SearchCriteria
            this.filterSelectors = [];
            this.registerEvents();
            this.render();

            // set default search filter
            this.setSearchFilter("AccountCriteria");
        },

        registerEvents: function () {
            this.collection.on("error", this.onValidationError, this);
            this.collection.on("change:isApplied", this.updateFilterButton, this);
            app.EventBus.on("filter:change", this.alertFilterChange, this);
            app.EventBus.on("filter:remove", this.alertFilterRemove, this);
        },

        alertFilterChange: function () {
            this.dismissAlerts();
            console.log("filter value changed");
            this.showAlert("filter values changed, do search again");
        },

        alertFilterRemove: function () {
            this.dismissAlerts();
            this.currentReportCriteria.toggleFilter();
            // init - can be moved to init() method
            var $btn = this.$el.find(".toggle-filter");
            $btn.tooltip({ // or popover
                title: "Filters removed",
                content: "You did this!",
                trigger: "manual",
                placement: "top"
            });
            // then show popover!
            $btn.tooltip("show"); // or popover
            // $btn.addClass("btn-danger");
            setTimeout(function () {
                $btn.tooltip("destroy"); // or popover
                // $btn.removeClass("btn-danger");
            }, 1000);
        },

        render: function () {
            this.$el.html(this.template());
            // don't want extra outer div tag, reset the view.el
            var pane = this.$el.children("div:first").get(0);
            this.setElement(pane);

            // add filters
            this.collection.each(this.appendFilter, this);
            return this;
        },

        appendFilter: function (reportCriteria) {
            this.appendFilterSelector(reportCriteria);

            // filter view for each report criteria
            Helper.filterView(reportCriteria);
        },

        appendFilterSelector: function (reportCriteria) {
            var filterSelector = new SearchFilterSelector({
                model: reportCriteria
            });
            this.$el.find(".filter-type .dropdown-menu").append(filterSelector.render().el);
            this.filterSelectors.push(filterSelector);
        },

        setSearchFilter: function (criteriaName) {
            var filterSelector = _.find(this.filterSelectors, function (selector) {
                return selector.model.get("name") === criteriaName;
            });

            if (filterSelector) {
                filterSelector.select();
            }
        },

        onSelectChange: function (e, reportCriteriaCid) {
            this.changeSearchFilter(reportCriteriaCid);
        },

        changeSearchFilter: function (cid) {
            this.dismissAlerts();

            this.currentReportCriteria = this.collection.get(cid);
            var selectedFilter = Helper.filterView(this.currentReportCriteria);

            // update the filter type name
            this.$el.find(".filter-type .filter-name").text(this.currentReportCriteria.get("title"));

            // TODO - handle unknown/undefined filter view
            var $filterContent = this.$el.find(".filter-content");
            // preserve event handlers etc (don't use $tabContent.empty() - which removes data, events etc)
            $filterContent.children().detach();
            $filterContent.append(selectedFilter.el);
            selectedFilter.render();

            // also need to update buttons
            this.updateFilterButton(this.currentReportCriteria);
        },

        updateFilterButton: function (reportCriteria) {
            var $buttonText = this.$el.find(".modal-footer > .btn.toggle-filter > span");
            var buttonLabel = reportCriteria.get("isApplied") ? "Remove Filter" : "Apply Filter";
            $buttonText.html(buttonLabel);
        },

        show: function (criteriaName) {
            if (criteriaName) {
                this.setSearchFilter(criteriaName);
            }
            this.$el.modal();
        },

        hide: function () {
            this.$el.modal("hide");
        },

        toggleFilter: function () {
            this.dismissAlerts();
            this.currentReportCriteria.toggleFilter();
        },

        searchReport: function () {
            this.dismissAlerts();
            if (this.collection.isReadyForSearch()) {
                this.hide();
                app.EventBus.trigger("startSearch");
            } else {
                this.showAlert("First set the search filter");
            }
        },

        onValidationError: function (model, error) {
            // TODO - this is too broad, need to narrow down for a specific error case.
            // or consider triggering a specific event instead.
            // show error message
            this.showAlert(error);
        },

        showAlert: function (message) {
            this.$el.find(".modal-body div.filter-content").prepend(this.templateAlert({
                message: message
            }));
        },

        dismissAlerts: function () {
            // dismiss any alerts
            // this.$el.find(".modal-body > div .alert").alert("close");
            this.$el.find(".modal-body > div .alert").remove();
        },

        onHidden: function () {
            console.log("hiding search criteria");
            this.dismissAlerts();
        },

        kill: function () {
            var index = this.$(".filter-index").val() || 0;
            var x = this.collection.at(index);  // should be Accounts
            Helper.removeFilter(x);
        }

    });

    return SearchFilters;

});