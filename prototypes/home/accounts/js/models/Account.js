var app = app || {};

// models
app.models = app.models || {};

app.models.Account = Backbone.Model.extend({
    
	defaults: {
		name: "",
		number: "",
		selected: false
	},

	toggle: function() {
		this.set("selected", !this.get("selected"));
		console.log("toggle: account selected - " + this.get("selected"));
	},

    select: function(state) {
        this.set("selected", state);
    }
});
