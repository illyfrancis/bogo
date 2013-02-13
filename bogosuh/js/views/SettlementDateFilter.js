var app = app || {};
app.views = app.views || {};

app.views.SettlementDateFilter = Backbone.View.extend({

	template: _.template($("#tpl-settlement-date-filter").html()),	// or generic date template?

	initialize: function() {
		// model = ReportCriteria (SettlementDateCriteria)
		// .settlementDates (DateRange)
		// debugger;
		this.settlementDatesFilter = new app.views.DateRangeFilter({
	        model: this.model.settlementDates
	    });
		this.$el.empty().append(this.settlementDatesFilter.el);
	},

	render: function() {
		console.log("SettlementDateFilter: render");
		// this.$el.html(this.template());
		return this;
	}
	
});