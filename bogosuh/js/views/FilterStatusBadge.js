var app = app || {};
app.views = app.views || {};

app.views.FilterStatusBadge = Backbone.View.extend({

	tagName: "span",

	template: _.template($("#tpl-report-filter-badge").html()),

	events: {
		"click a.remove-filter": "removeFilter",
		"click a.show-filter": "showFilter"
	},

	initialize: function() {
		// model = ReportCriteria
		this.model.on("change:isApplied", this.remove, this);
	},

	removeFilter: function() {
		this.model.removeFilter();
	},

	showFilter: function() {
		var criteriaName = this.model.get("name");
		app.EventBus.trigger("showFilters", criteriaName);
	},

	render: function() {
		this.$el.empty();
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	remove: function() {
		if (this.model.get("isApplied")) {
			return;
		}

		// TODO - below or this.dispose()
		this.off();
		this.model.off("change:isApplied", this.remove, this);
		Backbone.View.prototype.remove.call(this);
	}

});