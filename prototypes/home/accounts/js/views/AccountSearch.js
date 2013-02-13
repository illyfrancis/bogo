var app = app || {};

// views
app.views = app.views || {};

app.views.AccountSearch = Backbone.View.extend({

	el: ".account-search",

	initialize: function() {
		this.$table = this.$el.find(".account-list table tbody");
		this.collection.on("reset", this.xreset, this);
		this.collection.on("change", this.xchange, this);
		this.collection.on("add", this.xadd, this);
		this.collection.on("remove", this.xremove, this);
		this.collection.on("destroy", this.xdestroy, this);

		// keep track of account items views
		this._itemViews = [];
	},

	xreset: function() {
		console.log("on reset from search account view");
		this.render();
	},

	xchange: function() {
		console.log("x change");
	},

	xadd: function() {
		console.log("x add");
	},

	xremove: function() {
		console.log("x remove");
	},

	xdestroy: function() {
		console.log("x destroy");
	},

	events: {
		"click .account-selection .select-all": "selectAll",
		"click .account-selection .select-none": "selectNone"
	},

	selectAll: function() {
		this.collection.selectAll(true);
	},

	selectNone: function() {
		this.collection.selectAll(false);
	},

	render: function() {
		// dispose current item views before adding new ones
		this.disposeItemViews();

		this.$table.empty();
		this.collection.each(this.accountItem, this);
		return this;
	},

	accountItem: function(account) {
		this.$table.append(this.createItemView(account).render().el);
	},

	disposeItemViews: function() {
		// clean up
		_.each(this._itemViews, function(item) {
			item.dispose();
		});

		// this._itemViews = [];
		this._itemViews.length = 0; // http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript
	},

	createItemView: function(account) {
		var itemView = new app.views.AccountRow({model: account});

		// add to item views for disposing.
		this._itemViews.push(itemView);

		return itemView;
	}

});