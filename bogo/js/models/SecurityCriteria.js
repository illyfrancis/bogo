var app = app || {};
app.models = app.models || {};

app.models.SecurityCriteria = app.models.ReportCriteria.extend({
	// properly extend defaults
	defaults: _.extend({}, app.models.ReportCriteria.prototype.defaults, {
		uid: "SecurityCriteria",
		name: "SecurityCriteria",
		title: "Security"
	}),

	validate: function(attrs) {
		if(attrs.isApplied) {
			console.log("security criteria: validate");
		}
	},

	criteria: function() {
		return "SecurityCriteria:JSON";
	}

});