var app = app || {};

// views
app.views = app.views || {};

app.views.ReportColumnItem = Backbone.View.extend({
	tagName: "option",

	template: _.template($("#template-column-item").html()),

	events: {
		"dblclick" : "toggle"
	},

	toggle: function() {
		var x = this.model.get("selected");
		this.model.set({selected: !x});
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

app.views.ReportColumnSelector = Backbone.View.extend({

	el: ".report-column-selector",

	events: {
		"click .btn": "foo"
	},

	initialize: function() {
		this.collection.on("change", this.render, this);
		console.log("init : " + this.collection.length);
		this.$available = this.$el.find(".report-column-available");
		this.$selected = this.$el.find(".report-column-selected");
	},

	foo: function() {
		var x = this.$el.find(".report-column-available").val();
		console.log(">>> " + x);
		x = this.$el.find(".report-column-selected").val();
		console.log(">>> " + x);
	},

	render: function() {
		// should render separate list (selected vs available)
		this.$available.empty();
		_.each(this.collection.availableColumns(), this.addReportColumnItem, this.$available);

		this.$selected.empty();
		_.each(this.collection.selectedColumns(), this.addReportColumnItem, this.$selected);
		return this;
	},

	addReportColumnItem: function(reportColumn) {
		var itemView = new app.views.ReportColumnItem({model: reportColumn});
		this.append(itemView.render().el);
	}

});