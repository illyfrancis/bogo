var app = app || {};

// views
app.views = app.views || {};

app.views.AccountRow = Backbone.View.extend({

	tagName: "tr",

	template: _.template($("#tpl-account-row").html()),

	events: {
		"click input[type=checkbox]": "toggle"
		// TODO - on change check box fire event so that the outer view can set the check all / clear all to indeterminate
	},

	initialize: function() {
		this.model.on("change", this.render, this);
		this.model.on("destroy", function() {
			console.log("> model destroy !!!!");
		}, this);
	},

	render: function() {
		this.$el.empty();	// needed?
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	toggle: function() {
		this.model.toggle();
	},

	// dispose
	dispose: function() {
		this.remove();
		this.off();
		this.model.off("change", this.render);
	}
});