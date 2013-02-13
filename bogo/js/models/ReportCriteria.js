var app = app || {};
app.models = app.models || {};

/*
	ReportCriteria has a name and state that indicates if the filter has been applied.

	Each ReportCriteria class must have its unique id (uid)

	Should know how to hydrate & freeze the filtered state and use JSON format for these.

	ReportCriteria aggregates underlying filtered values and its kind, for example, an account filter should have/know
	about PaginatedAccounts.

	Also ReportCriteria should know about sort field(s) and its order (ie. asc or desc).
	However it is unclear as to what the API design supports and what the default should be
*/
app.models.ReportCriteria = Backbone.Model.extend({
	
	defaults: {
		uid: undefined,
		name: "ReportCriteria",
		title: "undefined",
		isApplied: false
	},

	initialize: function() {

		var criteria = this.get("criteria");

		if (criteria) {
			if (criteria instanceof Backbone.Model) {
				console.log("the criteria are model type");
			} else if (criteria instanceof Backbone.Collection) {
				console.log("this criteria are collection type");
			}
		} else {
			console.log("criteria not defined");
		}
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

	dehydrate: function() {
		// returns JSON representation of selected accounts
		// this.collection.doSome mapping then pluck it
		console.log("filter: dehydrate");
	},

	hydrate: function(json) {
		// hydrate criterion from json
		console.log("fitler: hydrate");
	},

	criteria: function() {
		// noop
		console.log("ReportCriteria: criteria");
		// TODO - throw exception here to ensure it's implemented in derived class?
	}

});