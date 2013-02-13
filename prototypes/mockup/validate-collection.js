// test for validation of models and collection.
var Criterion = Backbone.Model.extend({
	validate: function(attrs) {
		console.log("model:validate");
		this.collection.validate();
	}
});

var Criteria = Backbone.Collection.extend({
	model: Criterion,

	initialize: function(options) {
		this.name = options.name;
	},

	validate: function() {
		console.log("collection: validate [" + this.name + "]");
	}
});

var one = new Criterion({
	name: "one"
});

var two = new Criterion({
	name: "two"
});

var three = new Criterion({
	name: "three"
});

var c1 = new Criteria({
	name: "c1"
});
c1.add(one);
c1.add(two);
c1.add(three);

// add to collection
var c2 = new Criteria({
	name: "c2"
});
c2.add(one);