var app = app || {};
app.views = app.views || {};

app.views.ReportColumnHeader = Backbone.View.extend({

	tagName: "th",

	className: "",

	template: _.template($("#tpl-report-column-header").html()),

	events: {
		"click i": "onClickForFilter",
		"click": "onClickForSort"
	},

	initialize: function() {
		// model = ReportColumn
		app.data.searchCriteria.on("change:isApplied", this.render, this);
	},

	onClickForFilter: function(e) {
		e.stopPropagation();
		var criteriaName = this.model.get("criteria");
		app.EventBus.trigger("showFilters", criteriaName);
	},

	onClickForSort: function(e) {
		this.model.reverseSort();
		this.model.removeSortFromOtherColumns();
		// TODO - can use event handler to search again OR invoke explicit
		app.EventBus.trigger("startSearch"); // TODO - replace app.EventBus with EventBus
	},

	render: function() {
		// TODO displose view
		this.$el.empty();
		this.$el.html(this.template(this.model.toJSON()));

		// adjust filter icon according to criteria's applied state.
		if (app.data.searchCriteria.isCriteriaApplied(this.model.get("criteria"))) {
			this.$el.children("i").removeClass("icon-white");
		}

		var $sortDirection = this.$el.children("span.pull-right");
		if (this.model.isSortAsc()) {
			$sortDirection.addClass("caret").removeClass("caron");
		} else if (this.model.isSortDesc()) {
			$sortDirection.removeClass("caret").addClass("caron");
		} else {
			$sortDirection.removeClass("caret caron");
		}

		return this;
	}
});

