var ColumnHeader = Backbone.View.extend({

	tagName: "th",

	className: "header",

	template: _.template('<i class="icon-filter"></i> <%= title %>'),

	events: {
		"click i": "onClickForFilter",
		"click": "onClickForSort"
	},

	onClickForFilter: function(e) {
		alert("filter click");
		e.stopPropagation();
	},

	onClickForSort: function(e) {
		console.log("search again with sorting");
		this.$el.toggleClass("headerSortUp"); // or re-render and use the model to update the view
	},

	render: function() {
		this.$el.html(this.template({title: this.options.title}));
		return this;
	}

});

$(function() {

	var col1 = new ColumnHeader({title: "Account Sort Up"});
	var col2 = new ColumnHeader({title: "Account Sort Down"});
	var col3 = new ColumnHeader({title: "Account Sort Both"});

	var $header = $("#test-table").find("table thead tr");
	$header.append(col1.render().el);
	$header.append(col2.render().el);
	$header.append(col3.render().el);

});