var app = app || {};
app.views = app.views || {};

/*
// for search result display
<div class="nav-bar"></div>
<div class="filter-bar"></div>
<div class="search-content content-fluid">
	<div class="modal hide">spinner...</div>
	<div class="search-result">
		<div class="report-header"></div>
		<div class="report-body"></div>
		<div class="report-footer"></div>
	</div>
</div>

	or

<div class="nav-bar"></div>
<div class="filter-bar"></div>
<div class="search-content content-fluid">
	<div class="modal hide">spinner...</div>
	<div class="search-result">
		<table>
			<thead class="report-header">
			</thead>
			<tbody class="report-body">
			</tbody>
		</table>
		<div class="report-footer">
		</div>
	</div>
</div>

and no scrollbar
*/

app.views.SearchResult = Backbone.View.extend({

	tagName: "div",

	className: "search-result",

	template: _.template($("#tpl-search-result").html()),

	initialize: function(options) {
		// collection = Report
	},

	render: function() {
		// if report is empty
		//  this.renderNoReport();
		// else do the following.
		this.$el.html(this.template());
		this.renderColumnHeaders();
		this.renderReports();
		return this;
	},

	renderColumnHeaders: function() {
		_.each(app.data.reportSchema.selectedColumns(), this.appendColumnHeader, this);
		this.enableTooltip();
	},

	appendColumnHeader: function(reportColumn) {
		var columnHeader = new app.views.ReportColumnHeader({
			model: reportColumn
		});
		this.$el.find(".report-header tr").append(columnHeader.render().el);
	},

	enableTooltip: function() {
		this.$el.find("[rel=tooltip]").tooltip();
	},

	renderReports: function() {
		// prepare the row template
		this.rowTemplate = _.template(this.reportRowTemplate());

		this.collection.each(this.appendReportRow, this);
	},

	appendReportRow: function(reportItem) {
		var row = new app.views.ReportRow({
			model: reportItem,
			template: this.rowTemplate
		});
		this.$el.find(".report-body").append(row.render().el);
	},

	reportRowTemplate: function() {
		var cell, template = "";
		_.each(app.data.reportSchema.selectedColumns(), function(reportColumn) {
			cell = "<td><%= " + reportColumn.get("name") + " %></td>";
			template = template.concat(cell);
		});

		return template;
	}
});