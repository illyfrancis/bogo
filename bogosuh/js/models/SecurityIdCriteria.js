var app = app || {};
app.models = app.models || {};

app.models.SecurityIdCriteria = {
	validate: function(attrs) {
		if(attrs.isApplied) {
			console.log("security id criteria: validate");
		}
	},

	query: function() {
		return "SecurityIdCriteria:JSON";
	}
};
