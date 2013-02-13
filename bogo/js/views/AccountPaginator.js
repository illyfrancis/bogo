var app = app || {};
app.views = app.views || {};

app.views.AccountPaginator = Backbone.View.extend({

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
		this.collection.previousPage();
	},

	gotoNext: function(e) {
		this.collection.nextPage();
	},

	gotoPage: function(e) {
		var page = $(e.target).val();
		this.collection.goTo(page);
	},

	render: function() {
		this.$el.empty();	// needed?
		this.$el.html(this.template(this.collection.info()));
		this.delegateEvents();	// TODO - this delegation is needed, re-read the guide on managing subviews
		return this;
	}
});