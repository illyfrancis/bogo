var app = app || {};
app.models = app.models || {};

app.models.AccountCriteria = app.models.ReportCriteria.extend({

	// properly extend defaults
	// http://stackoverflow.com/questions/6549149/extending-the-defaults-of-a-model-superclass-in-backbone-js
	defaults: _.extend({}, app.models.ReportCriteria.prototype.defaults, {
		uid: "AccountCriteria",
		name: "AccountCriteria",
		title: "Account"
	}),

	initialize: function() {
		// for convenience
		this.paginatedAccounts = this.get("criteria");
		// TODO - i think the filter(s) needs filter name (or actually ReportColumn name)
	},

	validate: function(attrs) {
		// when the criteria is applied, confirm if the criteria are set
		if (attrs.isApplied) {
			if (this.paginatedAccounts && !this.paginatedAccounts.hasSelection()) {
				// TODO - better error message
				return "Cannot apply filter, nothing selected";
			}
		}
	},

	criteria: function() {
		return this.paginatedAccounts.selectedAccountNumbers();
	}
});