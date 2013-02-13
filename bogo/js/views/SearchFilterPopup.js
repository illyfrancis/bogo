var app = app || {};
app.views = app.views || {};

app.views.SearchFilterPopup = Backbone.View.extend({

	template: _.template($("#tpl-search-criteria").html()),

	templateAlert: _.template($("#tpl-alert").html()),

	events: {
		"hidden": "hiddenFoo",
		"click .toggle-filter": "toggleFilter",
		"click .search-report": "searchReport",
		"change .filter-type select": "changeSearchFilter"
	},

	// this.collection is SearchCriteria
	initialize: function() {
		this.filterTypes = [];
		this.collection.on("error", this.onValidationError, this);
		this.collection.on("change:isApplied", this.updateFilterButton, this);
		this.searchFilters = this.options.searchFilters;
		this.render();

		// set default filter type
		this.setSearchFilter("SecurityCriteria");
	},

	render: function() {
		this.$el.html(this.template());
		// don't want extra outer div tag, reset the view.el
		var pane = this.$el.children("div:first").get(0);
		this.setElement(pane);

		// TODO - need to render it somewhere, render it to <body> for now.
		this.$el.appendTo("body");

		// add filter types
		this.collection.each(this.appendFilterTypes, this);

		return this;
	},

	appendFilterTypes: function(criteria) {
		var filterType = new app.views.SearchFilterType({model: criteria, parent: this});
		var $filterSelector = this.$el.find(".filter-type select");
		this.filterTypes.push(filterType);
		$filterSelector.append(filterType.render().el);
	},

	setSearchFilter: function(criteriaName) {
		var filterType = _.find(this.filterTypes, function(type) {
			return type.model.get("name") === criteriaName;
		});

		// TODO - filterType not found
		filterType && filterType.select();
	},

	changeSearchFilter: function(e) {
		this.dismissAlerts();

		var filterId = $(e.target).val();

		var filterType = _.find(this.filterTypes, function(type) {
			return type.model.cid === filterId;
		});

		// TODO - what if filterType isn't found?

		// get the filter view.
		var criteria = filterType.model;
		this.currentSearchFilter = this.getSearchFilter(criteria);

		var $filterContent = this.$el.find(".filter-content");
		// preserve event handlers etc (don't use $tabContent.empty() - which removes data, events etc)
		$filterContent.children().detach();
		$filterContent.append(this.currentSearchFilter.el);
		this.currentSearchFilter.render();

		// also need to update buttons
		this.updateFilterButton(criteria);
	},

	updateFilterButton: function(criteria) {
		var filterButtonText = criteria.get("isApplied") ? "Remove Filter" : "Apply Filter";
		var $buttonText = this.$el.find(".modal-footer > .btn.toggle-filter > span");
		$buttonText.html(filterButtonText);
	},

	show: function(criteriaName) {
		debugger;
		criteriaName && this.setSearchFilter(criteriaName);
		this.$el.modal();
	},

	hide: function() {
		this.$el.modal("hide");
	},

	getSearchFilter: function(criteria) {
		var searchFilterView = _.find(this.searchFilters, function(searchFilter) {
			return searchFilter.model == criteria;
		});

		// TODO - what if none found?

		return searchFilterView;
	},

	toggleFilter: function() {
		this.dismissAlerts();
		this.currentSearchFilter.toggleFilter();
	},

	searchReport: function() {
		this.dismissAlerts();

		// check a few things...
		// 1. any filters applied?
		if (this.collection.isReadyForSearch()) {
			Bogo.trigger("startSearch");
			this.hide();
		} else {
			this.showAlert("First set the search filter");
		}

		// 2. if no, show message

		// 3. if yes, trigger event "startSearch" or something along those lines...

		// 4. hide the popup
	},

	onValidationError: function(model, error) {
		// TODO - this is too broad, need to narrow down for a specific error case.
		// or consider triggering a specific event instead.
		// show error message
		this.showAlert(error);
	},

	showAlert: function(error) {
		this.$el.find(".modal-body > div").prepend(this.templateAlert({message:error}));
	},

	dismissAlerts: function() {
		// dismiss any alerts
		// this.$el.find(".modal-body > div .alert").alert("close");
		this.$el.find(".modal-body > div .alert").remove();
	},

	hiddenFoo: function() {
		console.log("hiding search criteria");
		this.dismissAlerts();
	}


});

