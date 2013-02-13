var app = app || {};
app.models = app.models || {};

// Criterion
app.models.AccountCriterion = Backbone.Model.extend({

    // initialized with PaginatedAccounts
    defaults: {
        name: "AccountCriterion",
        isApplied: false;
    },

    export: function() {
        // returns JSON representation of selected accounts
        // this.collection.doSome mapping then pluck it
        console.log("AccountCriterion: export")
    },

    import: function(json) {
        // hydrate criterion from json
        console.log("AccountCriterion: import")
    }
});
