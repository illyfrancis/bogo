var App = App || {};
App.Mixins = App.Mixins || {};
App.Mixins.Navigation = {
	toggle: function() {
		console.log("toggle");
	},

	open: function() {
		console.log("open");
	},

	close: function() {
		console.log("close");
	}
};


App.Views = App.Views || {};

/*
-------------------------------------------
Style 1
-------------------------------------------
*/
App.Views.Menu = Backbone.View.extend({
	// do something 
	render: function() {
		console.log("render menu");
		this.toggle();
		this.open();
		this.close();
	}
});

_.extend(App.Views.Menu.prototype, App.Mixins.Navigation);

/*
-------------------------------------------
Style 2
-------------------------------------------
*/
App.Views.Tabs = Backbone.View.extend(
	_.extend({}, App.Mixins.Navigation, {

	// (Methods and attributes here)
	render: function() {
		console.log("render tab");
		this.toggle();
		this.open();
		this.close();
	}

}));


$(function() {

	var menu = new App.Views.Menu();
	menu.render();

	var tabs = new App.Views.Tabs();
	tabs.render();
});