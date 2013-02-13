// define console for IE8
if (window.console === undefined) {
	window.console = {};
	window.console.log = function(e) { /*alert(e);*/ };
}

var app = app || {};
app.views = app.views || {};

/*
Rough sketch:

<div id="report-app">
	<div class="nav">Toolbar of some kind</div>
	<div class="filters">
		<button class="add-filter">to launch filters page</button>
	</div>
	<div class="report"></div>
</div>
*/
app.views.BogoApp = Backbone.View.extend({

	el: "#report-app",

	events: {
	},

	initialize: function() {
		// load filters and backing models (e.g. accounts)
		this.initCriteria();

		this.searchFilterPopup = new app.views.SearchFilterPopup({
			collection: this.searchCriteria,
			searchFilters: this.searchFilters
		});

		this.filterStatusBar = new app.views.FilterStatusBar({
			collection: this.searchCriteria,
			searchFilterPopup: this.searchFilterPopup
		});

		// event binding.
		this.searchCriteria.on("change", this.statusUpdate, this);

		// TODO - use EventBus instead
		this.on("startSearch", this.startSearch, this);
		this.on("showFilters", this.showFilters, this);

		// init report column selector
		var reportSchema = this._fetchReportSchema();
		this.reportColumnSelector = new app.views.ReportColumnSelector({collection: reportSchema});

		// init report view.
		this.reportView = new app.views.ReportView({
			collection: reportSchema,
			searchCriteria: this.searchCriteria
		});

		// nav (menu) bar
		var menu = new app.views.BogoAppMenu({
			collection:this.searchCriteria
		});
	},

	showFilters: function(criteriaName) {
		alert("criteria name :" + criteriaName);
		// TODO - pass filter view name
		this.searchFilterPopup.show(criteriaName);
	},

	statusUpdate: function(criteria) {
		var msg = criteria.get("name") + " criteria ";
		if (criteria.hasChanged("isApplied")) {
			msg += criteria.get("isApplied") ? "added" : "removed";
		}
		this.$el.children(".status").html(msg);
	},

	startSearch: function() {
		var $searchStatus = $(".search-status");
		$searchStatus.html("<h4>Searching...</h4>");
		$searchStatus.append(this.searchCriteria.getCriteria());

		this.reportView.search();
	},

	render: function() {
		var $content = this.$el.find(".hero-unit div:first");
		$content.append(this.filterStatusBar.render().el);
		$content.append(this.reportColumnSelector.render().el);
		// $content.append(this.reportView.render().el);
		$(".search-result").append(this.reportView.render().el);

		return this;
	},

	initCriteria: function() {

		var paginatedAccounts = this._fetchAccounts();

		// create dummy criteria.
		var accountCriteria = new app.models.AccountCriteria({criteria: paginatedAccounts});
		// var securityCriteria = new app.models.SecurityCriteria({name: "Security", isApplied: true});
		var securityCriteria = new app.models.SecurityCriteria();

		this.searchCriteria = new app.collections.SearchCriteria();
		this.searchCriteria.add(accountCriteria);
		this.searchCriteria.add(securityCriteria);

		// this.searchCriteria.fetch();
		// this.searchCriteria.url = "/criteria";

		// create filters.
		this.searchFilters = [];
		this.searchFilters.push(new app.views.AccountFilter({model: accountCriteria}));
		this.searchFilters.push(new app.views.SecurityFilter({model: securityCriteria}));
	},

	// _thinkAboutIt: function() {

	//     var paginatedAccounts = this.fetchedSomehow();
	//     var accountCriteria = new SearchFilter();
	//     accountCriteria.hydrate(json);
	// },

	_fetchAccounts: function() {
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
		// console.log("count before pager : " + paginatedAccounts.length);
		paginatedAccounts.pager();
		// console.log("count after pager : " + paginatedAccounts.length);
		return paginatedAccounts;
	},

	_fetchReportSchema: function() {
		var reportSchema = new app.collections.ReportSchema();
		// reportSchema.url = "/reportschema";
		// reportSchema.fetch();
		reportSchema.reset(response.reportSchema.values);

		// need to assume that the position is already determined - but let's just do that here.
		var position = 0;
		reportSchema.each(function(reportColumn) {
			reportColumn.set("position", ++position);
		});

		return reportSchema;
	}

});

var Bogo;
$(function() {

	Bogo = new app.views.BogoApp();
	Bogo.render();

});