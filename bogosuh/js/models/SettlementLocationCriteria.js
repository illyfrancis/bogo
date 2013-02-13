var app = app || {};
app.models = app.models || {};

app.models.SettlementLocationCriteria = {
	validate: function(attrs) {
		if(attrs.isApplied) {
			console.log("settlement location criteria: validate");
		}
	},

	query: function() {
		return "SettlementLocationCriteria:JSON";
	}
};
