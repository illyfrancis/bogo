var app = app || {};

// views
app.views = app.views || {};

app.views.AccountPaginator = Backbone.View.extend({

	el: ".account-pagination",

	template: _.template($("#tpl-account-paginator").html()),

	initialize: function() {
		this.collection.on("reset", this.render, this);
		this.collection.on("change", function() { console.log("pagi : change"); });
		this.collection.on("add", function() { console.log("pagi : add"); });

		this.render();
	},

	events: {
		"click .prev": "gotoPrevious",
		"click .next": "gotoNext",
		"change .pageNumber": "gotoPage"
	},

	gotoPrevious: function(e) {
		e.preventDefault();
		this.collection.previousPage();
	},

	gotoNext: function(e) {
		e.preventDefault();
		this.collection.nextPage();
	},

	gotoPage: function(e) {
		e.preventDefault();
		var page = $(e.target).val();
		this.collection.goTo(page);
	},

	render: function() {
		this.$el.empty();	// needed?
		this.$el.html(this.template(this.collection.info()));
		return this;
	}
});