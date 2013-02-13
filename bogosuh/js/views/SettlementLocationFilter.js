var app = app || {};
app.views = app.views || {};

app.views.SettlementLocationFilter = Backbone.View.extend({

	template: _.template($("#tpl-settlement-location-filter").html()),

	render: function() {
		console.log("SettlementLocationFilter: render");

		this.$el.html(this.template());

		return this;
	}

});