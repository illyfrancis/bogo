var app = app || {};
app.views = app.views || {};

// app.views.ViewManager = {
app.views.ViewManager = Backbone.View.extend({

	views: [],

	appMenu: function() {
/*        var appMenu = this._findView("appMenu");
		if(appMenu not found) {
			appMenu = new AppMenu({
				collection: app.data.searchCriteria
			});
			this.views.push({
				name: "appMenu",
				view: appMenu
			})
		}
		return appMenu;
*/
		// nav (menu) bar
		return new app.views.BogoAppMenu({
			collection: app.data.searchCriteria
		});
	},

	filterStatusBar: function() {
		return new app.views.FilterStatusBar({
			collection: app.data.searchCriteria
		});
	},

	reportSettings: function() {
		return new app.views.ReportSettings();
	},

	searchFilters: function() {
		return new app.views.SearchFilters({
			collection: app.data.searchCriteria
		});
	},

	filterView: function(reportCriteria) {
		// the idea is to create a filter based on the name of reportCriteria
		// the convention is to use the name of criteria to locate and create corresponding filter view.
		// e.g. AccountCriteria -> AccountFilter
		// TransactionTypeCriteria -> TransactionTypeFilter
		var name = reportCriteria.get("name"),
			last = name.indexOf("Criteria"),
			viewName = name.substr(0, last).concat("Filter");

		console.log("> view name [" + viewName + "]");

		var view = this._findView(viewName);
		if (!view) {
			if (app.views[viewName]) {
				view = new app.views[viewName]({
					model: reportCriteria
				});

				this._addView(viewName, view);
			} else {
				console.log("view class doesn't exist");
				// TODO throw exception? or message or dummy view?
			}
		}

		return view;
	},

	searchContent: function() {
		return new app.views.SearchContent();
	},

	_findView: function(name) {
		var found = _.find(this.views, function(view) {
			return view.name === name;
		});
		if(found) {
			found = found.view; // the view obj
		}
		return found;
	},

	_addView: function(name, view) {
		this.views.push({
			name: name,
			view: view
		})
	}
});

// suppose the view manager can be creating here?
// app.views.viewManager = new app.views.ViewManager();

// or use it as is (i.e. don't create an instance)

// also use it as an event bus?
// app.EventBus.trigger("startSearch"); -> Report view should handle this.