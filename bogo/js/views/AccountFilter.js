var app = app || {};
app.views = app.views || {};

app.views.AccountFilter = Backbone.View.extend({

	className: "account-search",

	template: _.template($("#tpl-account-search").html()),

	events: {
		"click .account-selection .select-all": "selectAll",
		"click .account-selection .select-none": "selectNone",
		// "change .account-filter .account-name": "foo",
		"click .account-filter .filter": "filterAccounts"
	},

	// this.model is AccountCriteria
	initialize: function() {
		this.paginatedAccounts = this.model.get("criteria");
		this.paginatedAccounts.on("reset", this.renderAccountList, this);

		// keep track of account rows
		this._accountRows = [];

		this.paginator = new app.views.AccountPaginator({collection: this.paginatedAccounts});
	},

	selectAll: function() {
		this.paginatedAccounts.selectAll(true);
	},

	selectNone: function() {
		this.paginatedAccounts.selectAll(false);
	},

	filterAccounts: function() {
		var name = this.$el.find(".account-filter .account-name").val();
		var number = this.$el.find(".account-filter .account-number").val();
		var selected = this.$el.find(".account-filter .account-selection").hasClass("active");

		console.log("> " + name + ":" + number + ":" + selected);

		// build the filter fields based on selection
		var fieldFilters = [];

		// filter by number
		if (_.isEmpty(number)) {
			fieldFilters.push({field: "number", type: "pattern", value: new RegExp(".")});
		} else {
			fieldFilters.push({field: "number", type: "pattern", value: new RegExp("^"+number, "igm")});
		}

		// filter by name
		if (_.isEmpty(name)) {
			fieldFilters.push({field: "name", type: "pattern", value: new RegExp(".")});
		} else {
			fieldFilters.push({field: "name", type: "pattern", value: new RegExp("^"+name, "igm")});
		}

		// filter by selection
		fieldFilters.push({field: "selected", type: "equalTo", value: selected});

		this.paginatedAccounts.setFieldFilter(fieldFilters);

		// TODO - how to remove filter? the lib doesn't provide a function for this.
		// one way is to replace .models with .originalModels before starting..
	},

	render: function() {
		console.log("account search criteria");

		this.$el.empty();
		this.$el.html(this.template());	// TODO - need to hold on to filter values for re-render. consider splitting out "account search filter" into its own class?

		// account list
		this.$table = this.$el.find(".account-list table tbody");
		this.renderAccountList();

		// account paginator
		this.$el.find(".account-pagination").append(this.paginator.el);
		this.paginator.render();

		return this;
	},

	renderAccountList: function() {
		this.disposeAccountRows();
		this.$table.empty();
		this.paginatedAccounts.each(this.appendAccountRow, this);
		return this;
	},

	appendAccountRow: function(account) {
		this.$table.append(this.createAccountRow(account).render().el);
	},

	disposeAccountRows: function() {
		// clean up
		_.each(this._accountRows, function(row) {
			row.dispose();
		});

		// this._accountRows = [];
		this._accountRows.length = 0; // http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript
	},

	createAccountRow: function(account) {
		var accountRow = new app.views.AccountRow({
			model: account
		});
		this._accountRows.push(accountRow);
		return accountRow;
	},

	// should be implemented for all filter views
	toggleFilter: function() {
		this.model.toggleFilter();
	}

});