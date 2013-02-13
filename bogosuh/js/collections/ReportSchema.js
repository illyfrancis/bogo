var app = app || {};
app.collections = app.collections || {};

/*

- What is JSON structure for report result?
	{
		accountNumber: "8110192", accountName: "LOREM IPSUM DOLOR SIT AMET",
		clientRefID: "ABDC-XYZT", transactionRefID: "39483028930000000000",
		transactionType: "REC", transactionTypeDesc: "RECEIVE FREE",
		securityID: "G12345675", securityDesc: "PERCIPIT MNESARCHUM EAM EA",
		securityIDType: "CUSIP", location: "US"
	}

- If we assume the same ReportColumn's name is used in the JSON response (report),
  we can generate schema using the same name.

- How should the report columns be persisted and hydrated? I think ReportSchema should be responsible for it (data API)
	define URL and call fetch & save etc.

*/

app.collections.ReportSchema = Backbone.Collection.extend({

	model: app.models.ReportColumn,

	initialize: function() {
		this.MIN_REPORT_COLUMNS = 3;
		this.MAX_REPORT_COLUMNS = 10;
	},

	comparator: function(reportColumn) {
		// sort by position
		return reportColumn.get("position");
	},

	availableColumns: function() {
		return this.where({selected: false});
	},

	selectedColumns: function() {
		return this.where({selected: true});
	},

	hasMinimumReportColumns: function() {
		return this.selectedColumns().length <= this.MIN_REPORT_COLUMNS;
	},

	hasMaximumReportColumns: function() {
		return this.selectedColumns().length >= this.MAX_REPORT_COLUMNS;
	},

	setDefaultSort: function() {
		var anySortApplied = this.any(function(reportColumn) {
			return reportColumn.isSortApplied();
		});

		if (!anySortApplied) {
			var firstColumn = this.selectedColumns()[0];
			firstColumn && firstColumn.reverseSort();
		}
	}

});