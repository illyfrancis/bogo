var app = app || {};
app.views = app.views || {};

app.views.SecurityIdFilter = Backbone.View.extend({

	template: _.template($("#tpl-security-id-filter").html()),

	render: function() {
		console.log("SecurityIdFilter: render");

		this.$el.html(this.template());

		return this;
	}

});