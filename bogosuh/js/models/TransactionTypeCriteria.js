var app = app || {};
app.models = app.models || {};

app.models.TransactionTypeCriteria = {

	hydrate: function(selections) {
		// app.data.transactionTypes
		var types = selections.types;	// array
		var refId = selections.id;

		// get all leaves.
		// TODO - if (types && !_.isEmpty(types)) { do below }
		app.data.transactionTypes.selectByValues(types);
	},
	preserve: function() {
		console.log("> TransactionTypeCriteria: preserve");
		// this.get("restrictions").accountNumbers = [2];
		// app.data.transactionTypes.selectedValues()
	},

	query: function() {
		console.log("> TransactionTypeCriteria: query");
		// console.log("> account criteria: ");
		// return app.data.paginatedAccounts.selectedAccountNumbers();
	},

	validate: function(attrs) {
		console.log("> TransactionTypeCriteria: validate");
		// when the criteria is applied, confirm if the criteria are set
		if (attrs.isApplied) {
			if (!app.data.transactionTypes.hasSelection()) {
				return "Cannot apply filter, nothing selected";
			}
		}
	}
};
