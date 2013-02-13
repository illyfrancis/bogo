var app = app || {};
app.collections = app.collections || {};

/*
	SearchCriteria is a collection of ReportCriteria
*/
app.collections.SearchCriteria = Backbone.Collection.extend({

	model: app.models.ReportCriteria,

	isReadyForSearch: function() {
		return this.any(function(criteria) {
			return criteria.get("isApplied");
		}, this);
	},

	// aggregation of "applied" critereia and "OR"ed
	// TODO - or maybe the criteria is a "combination" of both "filter" and "sort"
	// whereby each criteria object defines the definition of filter and sort.
	// getCriteria: function() {
	query: function() {
		// TODO - instead of _.map use _.each to combine both map & where into one.
		return _.reduce(
			_.map(this.where({isApplied: true}), this.mapper),
			this.reducer, "");
	},

	mapper: function(criteria, key, list) {
		return criteria.query();
	},

	reducer: function(memo, value, key, list) {
		return memo.concat(key < (list.length-1) ? value + "#OR#" : value);
	},

	isCriteriaApplied: function(criteriaName) {
		var criteria = this.getCriteriaByName(criteriaName);
		return criteria && criteria.get("isApplied");
	},

	getCriteriaByName: function(criteriaName) {
		var criteria = this.find(function(model) {
			return model.get("name") === criteriaName;
		});
		return criteria;
	}

});