var app = app || {};

// views
app.views = app.views || {};

app.views.Tree = Backbone.View.extend({

	tagName: "ul",

	className: "nav nav-list",

	render: function() {
		// collection = TreeCollection
		// tree collection is children of the model
		this.collection.each(this.appendItem, this);
		return this;
	},

	appendItem: function(item) {
		var itemView = new app.views.TreeItem({
			model: item
		});
		itemView.appendTo(this);
	},

	refresh: function() {
		// trigger child change event to force redraw on parents.
		_.each(this.collection.leaves(), function(item) {
			item.trigger("childChange");
		});
	},

	collapse: function() {
		this.$el.addClass("hide");
	}
});