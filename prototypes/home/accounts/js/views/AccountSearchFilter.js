var app = app || {};

// views
app.views = app.views || {};

app.views.AccountSearchFilter = Backbone.View.extend({

	initialize: function() {
		// use Account as a filter model if need to persist.

		this.collection.on("reset", this.xreset, this);
		this.collection.on("change", this.xchange, this);
		this.collection.on("add", this.xadd, this);
		this.collection.on("remove", this.xremove, this);
		this.collection.on("destroy", this.xdestroy, this);
	},

	xreset: function() {
		console.log("x reset");
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

	el: ".account-filter",

	events: {
		"change .account-name": "foo",
		"click .apply-filter": "filter"
	},

	foo: function() {
		console.log("foo");
	},

	filter: function() {
		var name = this.$el.find(".account-name").val();
		var number = this.$el.find(".account-number").val();
		var selected = this.$el.find(".account-selection").hasClass("active");

		console.log("> " + name + ":" + number + ":" + selected);

		// build the filter fields based on selection
		var fieldFilters = [];

		// filter by number
		if (!_.isEmpty(number)) {
			fieldFilters.push({field: "number", type: "pattern", value: new RegExp("^"+number, "igm")});
		} else {
			fieldFilters.push({field: "number", type: "pattern", value: new RegExp(".")});
		}

		// filter by name
		if (!_.isEmpty(name)) {
			fieldFilters.push({field: "name", type: "pattern", value: new RegExp("^"+name, "igm")});
		} else {
			fieldFilters.push({field: "name", type: "pattern", value: new RegExp(".")});
		}

		// filter by selection
		fieldFilters.push({field: "selected", type: "equalTo", value: selected});

		this.collection.setFieldFilter(fieldFilters);

		// TODO - how to remove filter? the lib doesn't provide a function for this.
		// one way is to replace .models with .originalModels before starting..
	}

});