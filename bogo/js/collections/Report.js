var app = app || {};
app.collections = app.collections || {};

/*
	TransactionReprot is a collection of Transaction
*/
app.collections.Report = Backbone.Collection.extend({

	model: app.models.ReportItem

});