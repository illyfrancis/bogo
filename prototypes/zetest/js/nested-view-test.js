var InnerView = Backbone.View.extend({

	template: _.template("<p class='inner'>inner content</p>"),

	events: {
		"click .inner": "onClick"
	},

	initialize: function() {
		this.render();
	},

	onClick: function() {
		alert("Clicked on inner");
	},

	render: function() {
		this.$el.empty();
		this.$el.html(this.template());
		// this.delegateEvents();
		return this;
	}
});

var OuterView = Backbone.View.extend({

	className: "outer-view",

	template: _.template("<p class='outer'>some content for outer view</p>"),

	events: {
		"click .outer": "onClick"
	},

	onClick: function() {
		alert("Clicked Outer");
	},

	initialize: function() {
		this.innerView = new InnerView();
	},

	render: function() {
		this.$el.empty();
		this.$el.html(this.template());

		this.$el.append(this.innerView.el);	// try this.innerView.$el

		// this.innerView.render();

		return this;
	}

});

var outerView;
$(function() {
	outerView = new OuterView();
	outerView.render();

	$("body").append(outerView.el);
	// $("body").children().detach(); etc
});
