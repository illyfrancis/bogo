var app = app || {};
app.collections = app.collections || {};

/*
	SearchCriteria is a collection of ReportCriteria (its derivation)
*/
app.collections.SearchCriteria = Backbone.Collection.extend({

	//model: app.models.SearchCriteria  // how to do mixin?
	isReadyForSearch: function() {
		return this.any(function(model) {
			return model.get("isApplied");
		}, this);
	},

	// aggregation of "applied" critereia and "OR"ed
	// TODO - or maybe the criteria is a "combination" of both "filter" and "sort"
	// whereby each criteria object defines the definition of filter and sort.
	getCriteria: function() {
		// TODO - instead of _.map use _.each to combine both map & where into one.
		return _.reduce(
			_.map(this.where({isApplied: true}), this.mapper),
			this.reducer, "");
	},

	mapper: function(model, key, list) {
		return model.criteria();
	},

	reducer: function(memo, value, key, list) {
		return memo.concat(key < (list.length-1) ? value + "#OR#" : value);
	},

	isCriteriaApplied: function(criteriaName) {
		var criteria = this.find(function(model) {
			return model.get("uid") === criteriaName;
		});
		return criteria && criteria.get("isApplied");
	}

});