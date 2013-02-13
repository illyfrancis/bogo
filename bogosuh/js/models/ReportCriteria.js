var app = app || {};
app.models = app.models || {};

app.models.ReportCriteria = Backbone.Model.extend({
	
	defaults: {
		name: "",
		title: "",
		isApplied: false,
		restrictions: {}
	},

	initialize: function(options) {
		this.hydrate(this.attributes.restrictions);
	},

	parse: function(response) {
		// mixin
		var criteria = app.models[response.name];
		if (criteria) {
			_.extend(this, criteria);
		} else {
			console.log("Criteria [" + response.name + "] not found.");
		}

		return response;
	},

	applyFilter: function() {
		this.set("isApplied", true);
	},

	removeFilter: function() {
		this.set("isApplied", false);
	},

	toggleFilter: function() {
		this.set("isApplied", !this.get("isApplied"));
	},

	preserve: function() {
		// noop
	},

	hydrate: function(json) {
		// noop
		console.log("ReportCriteria: hydrate");
	},

	query: function() {
		// noop
	}

});