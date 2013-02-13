var app = app || {};
app.views = app.views || {};

app.views.SearchFilterSelector = Backbone.View.extend({

	tagName: "li",

	template: _.template($("#tpl-search-filter-selector").html()),

	events: {
		"click": "select"
	},

	initialize: function() {
		// model = ReportCriteria
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	select: function() {
		this.$el.trigger("change", this.model.cid);
	}

});