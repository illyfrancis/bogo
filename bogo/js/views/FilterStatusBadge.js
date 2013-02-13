var app = app || {};
app.views = app.views || {};

app.views.FilterStatusBadge = Backbone.View.extend({

	tagName: "span",

	template: _.template($("#tpl-report-filter-badge").html()),

	events: {
		"click a": "removeFilter"
	},

	initialize: function() {
		// the model is a ReportCriteria
		this.model.on("change:isApplied", this.remove, this);
	},

	removeFilter: function() {
		this.model.removeFilter();
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

		this.off();
		this.model.off("change:isApplied", this.remove, this);
		Backbone.View.prototype.remove.call(this);
	}

});