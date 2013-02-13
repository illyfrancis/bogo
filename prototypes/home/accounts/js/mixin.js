var Account = Backbone.Model.extend({
    defaults: {
        name: "",
        number: "",
        selected: false
    }
});

var Accounts = Backbone.Collection.extend({
    model: Account,
    selectedAccount: function() {
        return this.where({selected: true});
    }
});

var Security = Backbone.Model.extend({

});

var SecurityList = Backbone.Collection.extend({
    model: Security
});

// Criterion
var Criterion = Backbone.Model.extend({
    defaults: {
        name: "",
        isApplied: false
    },
    hydrate: function(json) {
        // de-serialize from json 
        console.log("> Hydrate: " + JSON.stringify(this.toJSON()));
    },
    freeze: function() {
        console.log("> freeze: " + JSON.stringify(this.toJSON()));
        return this.toJSON();
    }
});

// explicit Filter/Criterion ?
var AccountCriterion = Criterion.extend({

    initialize: function() {
        this.set({name: "Account Criterion"});
    }

});

var SecurityCriterion = Criterion.extend({

    initialize: function() {
        this.set({name: "Security Criterion"});
    }

});

var Criteria = Backbone.Collection.extend({
    model: Criterion,
    criteria: function() {

    }
});