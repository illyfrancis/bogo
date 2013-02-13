var app = app || {};
app.views = app.views || {};

app.views.SearchResult = Backbone.View.extend({

	tagName: "table",

	className: "table table-condensed",

	template: _.template($("#tpl-search-result").html()),

	initialize: function(options) {
		// collection is ReportSchema
		// report is report
		this.report = options.report;
		this.rowTemplate = _.template(this.collection.reportTemplate());
	},

	render: function() {
		// render the table
		this.$el.html(this.template());

		// render table header
		this.$theaderRow = this.$el.find("thead tr");
		_.each(this.collection.selectedColumns(), this.appendColumnHeader, this);

		// render the results
		this.$tbody = this.$el.find("tbody");
		// _.each(this.report, this.appendResultRow, this);
		this.report.each(this.appendResultRow, this);

		return this;
	},

	appendColumnHeader: function(reportColumn) {
		var column = new app.views.ColumnHeader({
			model: reportColumn
		});
		this.$theaderRow.append(column.render().el);
	},

	appendResultRow: function(reportItem) {
		var row = new app.views.ResultRow({
			model: reportItem,
			template: this.rowTemplate
		});
		this.$tbody.append(row.render().el);
	}

});
