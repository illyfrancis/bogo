var app = app || {};
app.models = app.models || {};

app.models.SecurityCategoryCriteria = {
	validate: function(attrs) {
		if(attrs.isApplied) {
			console.log("security category criteria: validate");
		}
	},

	query: function() {
		return "SecurityCategoryCriteria:JSON";
	}
};
