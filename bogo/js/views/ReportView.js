var app = app || {};
app.views = app.views || {};

app.views.ReportView = Backbone.View.extend({

	initialize: function(options) {
		// this.collection is a ReportSchema
		// this.report is a Report (a collection of ReportItem)
		// this.searchCriteria
		this.report = new app.collections.Report();
		this.searchCriteria = options.searchCriteria;
	},

	search: function() {
		console.log("do search");

		// prep search criteria
		// TODO - need to define relationship between SearchCriteria (or its elements) and
		// ReportColumns. Because when search criteria is passed on to the service it must have
		// query for { fieldName=[... filtered value ...] & sortBy=fieldName & sortDirection=asc } etc
		this.collection.setDefaultSort();

		// then extract sort info from this.collection (== ReportSchema)
		// this.collection._for_constructing_criteria_with_sort_info_

		// 
		this.searchCriteria.getCriteria();

		/*
		this.report.url = "/transactions";
		this.report.fetch();
		*/
		this.report.reset(response.report.transactions);
		this.render();
	},

	render: function() {

		if(this.report.length > 0) {
			// get the report template
			var template = _.template(this.collection.reportTemplate());

			var reportTable = [];

			this.report.each(function(value, key, list) {
				reportTable.push(template(value.toJSON()));
				// reportTable.push("s");
			}, this);

			console.log(reportTable);

			// render the column header
			this.$el.empty();

			var searchResult = new app.views.SearchResult({
				collection: this.collection,
				report: this.report
			});
			this.$el.append(searchResult.render().el);

		}

		return this;
	}
});