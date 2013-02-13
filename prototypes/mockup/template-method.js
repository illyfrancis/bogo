var BaseModel = Backbone.Model.extend({

	initialize: function() {
		console.log("> BaseModel : initialize");
		this.onInit();
	},

	onInit: function() {
		console.log("> BaseModel: onInit");
	}
});

var ExtendedModel = BaseModel.extend({

	onInit: function() {
		console.log("> ExtendedModel: onInit");
	}
});

$(function() {

	var model = new ExtendedModel();

});