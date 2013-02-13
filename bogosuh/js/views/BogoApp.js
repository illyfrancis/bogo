// define console for IE8
if (window.console === undefined) {
	window.console = {};
	window.console.log = function(e) { /*alert(e);*/ };
}

var app = app || {};
app.views = app.views || {};

app.views.BogoApp = Backbone.View.extend({

	el: "body",

	initialize: function() {
		app.views.viewManager.appMenu();
		this.reportSettings = app.views.viewManager.reportSettings();
		this.filterStatusBar = app.views.viewManager.filterStatusBar();
		this.searchFilters = app.views.viewManager.searchFilters();
		this.searchContent = app.views.viewManager.searchContent();

		this.registerEvents();
	},

	registerEvents: function() {
		app.EventBus.on("startSearch", this.doSearch, this);
		app.EventBus.on("showReportSettings", this.showReportSettings, this);
		app.EventBus.on("showFilters", this.showFilters, this);
	},

	render: function() {
		console.log("BogoApp:render");
		this.$el.append(this.filterStatusBar.render().el);
		this.$el.append(this.searchContent.el);	// nothing to render
		this.$el.append(this.reportSettings.render().el);
		this.$el.append(this.searchFilters.el); // - already rendered in initilize of searchfilters
	},

	doSearch: function() {
		console.log("doSearch");
		this.searchContent.execute();
	},

	showFilters: function(e) {
		this.searchFilters.show(e);
	},

	showReportSettings: function() {
		this.reportSettings.show();
	}
});
