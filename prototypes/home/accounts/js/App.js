var app = app || {};
app.models = app.models || {};
app.collections = app.collections || {};
app.views = app.views || {};

// define console for IE8
if (window.console === undefined) {
	window.console = {};
	window.console.log = function() {};
}

// main app
$(function() {
	var paginatedAccounts = new app.collections.PaginatedAccounts();
	/*
	paginatedAccounts.fetch({
		success: function() {
			paginatedAccounts.pager();
		}
	});
	*/

	// fake fetch
	paginatedAccounts.fetch();
	paginatedAccounts.reset(response.accounts.valid.values);
    console.log("count before pager : " + paginatedAccounts.length);
	paginatedAccounts.pager();
    console.log("count after pager : " + paginatedAccounts.length);

	var accountSearchFilter = new app.views.AccountSearchFilter({collection: paginatedAccounts});
	var accountPaginator = new app.views.AccountPaginator({collection: paginatedAccounts});
	var accountSearch = new app.views.AccountSearch({collection: paginatedAccounts});
	accountSearch.render();
});