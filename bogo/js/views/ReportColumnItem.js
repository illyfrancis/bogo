var app = app || {};
app.views = app.views || {};

app.views.ReportColumnItem = Backbone.View.extend({
	tagName: "option",

	template: _.template($("#tpl-report-column-item").html()),

	events: {
		"dblclick": "toggle"
	},

	initialize: function() {
		// model is a ReportColumn object
	},

	toggle: function(e) {
		e.stopPropagation();
		this.model.toggle();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.prop("value", this.model.cid);
		return this;
	}
});
