var app = app || {};
app.views = app.views || {};

app.views.ResultRow = Backbone.View.extend({

	tagName: "tr",

	events: {
		"click": "showDetail"
	},

	initialize: function(options) {
		// model is ReportItem
		// pass in template for efficiency
		this.template = options.template;
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	showDetail: function() {
		alert("show detail : " + this.template(this.model.toJSON()));
		// Q: what is the id for transaction detail? it should always be fetched?
	}

});
