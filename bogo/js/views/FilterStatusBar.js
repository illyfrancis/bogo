var app = app || {};
app.views = app.views || {};

/*
	Current scheme is that when a filter is removed the removal of filter button view is handled by itself so no
	handling of view disposal is required in this view.
	But if that changes (to cater for redraw of the buttons in order, for example) the disposal logic needs to be
	in here.
*/
app.views.FilterStatusBar = Backbone.View.extend({

	tagName: "div",

	className: "report-filters form-inline",

	template: _.template($("#tpl-report-filter-status-bar").html()),

	events: {
		"click .open-filters": "openFilters"
	},

	initialize: function() {
		this.collection.on("change:isApplied", this.updateView, this);
		this.searchFilterPopup = this.options.searchFilterPopup;
	},

	updateView: function(criteria) {
		// only do partial update
		if(criteria.get("isApplied")) {
			this.addFilterBadge(criteria);
		}
	},

	openFilters: function() {
		this.searchFilterPopup.show();
	},

	render: function() {
		this.$el.empty();
		this.$el.html(this.template());
		this.showFilterBadges();
		return this;
	},

	showFilterBadges: function() {
		var filtersApplied = this.collection.where({
			isApplied: true
		});
		_.each(filtersApplied, this.addFilterBadge, this);
	},

	addFilterBadge: function(filter) {
		// TODO - dispose views
		var filterBadge = new app.views.FilterStatusBadge({
			model: filter
		});
		this.$el.prepend(filterBadge.render().el);
	}

});