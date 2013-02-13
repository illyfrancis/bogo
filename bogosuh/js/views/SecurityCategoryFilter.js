var app = app || {};
app.views = app.views || {};

app.views.SecurityCategoryFilter = Backbone.View.extend({

	template: _.template($("#tpl-security-category-filter").html()),

	render: function() {
		console.log("SecurityCategoryFilter: render");

		this.$el.html(this.template());

		return this;
	}

});