var app = app || {};
app.views = app.views || {};

app.views.BogoAppMenu = Backbone.View.extend({

	el: ".navbar",

	events: {
		"click .report-search:not('.disabled')": "reportSearch",
		"click .report-settings:not('.disabled')": "reportSettings"
	},

	initialize: function() {
		// collection is SearchCriteria
		this.collection.on("change:isApplied", this.render, this);
		this.render();
	},

	reportSearch: function() {
		console.log("report search");
		Bogo.trigger("startSearch"); // TODO - replace Bogo with EventBus
	},

	reportSettings: function() {
		console.log("report settings");
	},

	render: function() {
		console.log("render menu to update button state");
		this.$el.find(".report-search").toggleClass("disabled", !this.collection.isReadyForSearch());

		return this;
	}

});