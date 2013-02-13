var app = app || {};
app.models = app.models || {};

app.models.AccountCriteria = {

	// related to app.data.paginatedAccounts
	hydrate: function(selections) {
		// apply restrictions to accounts
		var accountNumbers = selections.accountNumbers;
		app.data.paginatedAccounts.selectBy(accountNumbers);
	},
	preserve: function() {
		console.log("> account criteria: preserve");
		this.get("restrictions").accountNumbers = [2];
	},

	query: function() {
		console.log("> account criteria: ");
		return app.data.paginatedAccounts.selectedAccountNumbers();
	},

	validate: function(attrs) {
		// when the criteria is applied, confirm if the criteria are set
		if (attrs.isApplied) {
			if (app.data.paginatedAccounts && !app.data.paginatedAccounts.hasSelection()) {
				// TODO - better error message
				return "Cannot apply filter, nothing selected";
			}
		}
	}
};
