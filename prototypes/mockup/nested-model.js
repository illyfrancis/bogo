// namespace foo.bar
var foo = foo || {};
foo.bar = foo.bar || {};

var Account = Backbone.Model.extend({
	defaults: {
		name: "",
		number: "",
		selected: false
	}
});

var Accounts = Backbone.Collection.extend({
	model: Account,
	url: "accounts",
	restrictBy: function(accountNumbers) {
		console.log("> accounts: restrict by " + JSON.stringify(accountNumbers) + "");
		this.each(function(account) {
			var index = accountNumbers.indexOf(account.get("number"));
			if (index >= 0) {
				account.set("selected", true);
			}
		});
	}
});

var TransactionType = Backbone.Model.extend({
	defaults: {
		name: "",
		selected: false
	}
});

var TransactionTypes = Backbone.Collection.extend({
	model: TransactionType
});

var AccountCriteria = {
	// related to accounts.
	hydrate: function(selections) {
		// apply restrictions to accounts
		var accountNumbers = selections.accountNumbers;
		data.accounts.restrictBy(accountNumbers);
	},
	preserve: function() {
		console.log("> account criteria: preserve");
		this.get("restrictions").accountNumbers = [2];
	},
	// criteria
	query: function() {
		console.log("> account criteria: ");
	},
	validate: function(attrs) {

	}
};

var TransactionCriteria = {
/*
	restrictions: {
		types: ["RVP", "REC"],
		id: "TR001"
	}
*/

	hydrate: function(selections) {
		console.log("hydrating transaction criteria with : " + JSON.stringify(selections));
		// hydrate types
		console.log("hydrating transaction types : " + JSON.stringify(selections.types));
		// hydrate id
		console.log("hydrating transaction id : " + JSON.stringify(selections.id));

		data.transactionTypes;
	},
	preserve: function() {
		console.log("> transaction criteria: preserve");
		delete this.get("restrictions").types;
		this.get("restrictions").types = ["ABC"];
		delete this.get("restrictions").id;
		this.get("restrictions").somethingNew = { field: "123"};
	}
};

var ReportCriteria = Backbone.Model.extend({
	defaults: {
		name: "",
		isApplied: false,
		restrictions: {}
	},
	initialize: function(options) {
		console.log("init [" + JSON.stringify(options) + "]");
	},
	parse: function(response) {
		console.log("parse: model");
		// will it ever be needed again?
		// mixin
		var criteria = window[response.name];
		_.extend(this, criteria);
		this.hydrate(response.restrictions);

		return response;
	}
});

var SearchCriteria = Backbone.Collection.extend({
	model: ReportCriteria,
	parse: function(response) {
		console.log("parse: collection");
	}
});

// ----------------------------------------------------------

var data = data || {};

data.accounts = new Accounts();
data.accounts.reset([
	{name:"one", number:1},
	{name:"two", number:2},
	{name:"three", number:3}
]);

data.transactionTypes = {};
data.transactionId = {};

data.searchCriteria = new SearchCriteria();
data.searchCriteria.reset([{
	name: "AccountCriteria",
	isApplied: true,
	restrictions: {
		accountNumbers: [1, 3]
	}
}, {
	name: "TransactionCriteria",
	isApplied: true,
	restrictions: {
		types: ["RVP", "REC"],
		id: "TR001"
	}
}], {parse: true});	// for forcing the parse in the model

data.searchCriteria.each(function(item) {
	console.log("> " + item.get("name"));
});

// ------------ preserve --------------------------------

data.searchCriteria.each(function(criteria) {
	criteria.preserve();
});