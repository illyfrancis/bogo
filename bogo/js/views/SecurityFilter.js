var app = app || {};
app.views = app.views || {};

app.views.SecurityFilter = Backbone.View.extend({

	events: {
		"click": "onClick"
	},

	onClick: function() {
		alert("hey");
	},

    render: function() {
        console.log("security search criteria");
        this.$el.html("<p><strong>Security</strong> search criteria<p>");
        return this;
    },

	// should be implemented for all filter views
	toggleFilter: function() {
		this.model.toggleFilter();
	}

});
