var app = app || {};
app.views = app.views || {};

app.views.ColumnHeader = Backbone.View.extend({

	tagName: "th",

	className: "",

	template: _.template("<i class='icon-filter icon-white'></i> <%= title %><span class='pull-right'></span>"),

	events: {
		"click i": "onClickForFilter",
		"click": "onClickForSort"
	},

	initialize: function() {
		// model is ReportColumn
	},

	onClickForFilter: function(e) {
		e.stopPropagation();
		var criteriaName = this.model.get("criteria");
		Bogo.trigger("showFilters", criteriaName);
	},

	onClickForSort: function(e) {
		this.model.reverseSort();
		this.model.removeSortFromOtherColumns();
		// TODO - can use event handler to search again OR invoke explicit
		Bogo.trigger("startSearch"); // TODO - replace Bogo with EventBus
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));

		// adjust filter icon according to criteria's applied state.
		if (Bogo.searchCriteria.isCriteriaApplied(this.model.get("criteria"))) {
			this.$el.children("i").removeClass("icon-white");
		}

		var $sortDirection = this.$el.children("span");
		if (this.model.isSortAsc()) {
			$sortDirection.addClass("caret");
			$sortDirection.removeClass("caron");
		} else if (this.model.isSortDesc()) {
			$sortDirection.addClass("caron");
			$sortDirection.removeClass("caret");
		} else {
			$sortDirection.removeClass("caron");
			$sortDirection.removeClass("caret");
		}

		return this;
	}
});

