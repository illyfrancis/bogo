var app = app || {};
app.views = app.views || {};

app.views.SearchFilterType = Backbone.View.extend({

	tagName: "option",

	template: _.template("<%= title %>"),

	events: {
		"select": "foo"
	},

	foo: function() {
		console.log("option selected");
	},

	initialize: function() {
		// this.parent = this.options.parent;
		console.log("setting in init");
		this.$el.prop("value", this.model.cid);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	select: function() {
		this.$el.prop("selected", "selected");
		this.$el.trigger("change");
	}

});