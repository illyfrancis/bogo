var AccountView = Backbone.View.extend({
    tagName: "tr",

    template: _.template($("#template-account").html()),

    initialize: function() {
        // bind model change
        this.model.on("change", this.render, this);
    },

    events: {
        "click .toggle": "toggle"
    },

    toggle: function(e) {
        this.model.set("selected", this.$el.find("input[type=checkbox]").prop("checked"));
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});

var SearchAccount = Backbone.View.extend({
    el: ".search-accounts",

    events: {
        // filters
        "keypress .filter .account-name": "filterByName",
        "blur .filter .account-name": "filter",
        "blur .filter .account-number": "filter",
        "change .filter .account-name": "changed",
        "change .filter .account-number": "changed",
        "click .filter .apply": "filter",
        // multi selection
        "click .select-accounts .all": "selectAll",
        "click .select-accounts .none": "selectNone",
    },

    initialize: function() {
        this.$accountName = this.$el.find(".account-name");
        this.$accountNumber = this.$el.find(".account-number");
        this.$accountSelected = this.$el.find(".account-selected");

        this.$tbody = this.$el.find(".account-list table tbody");

        // bind collection event
        this.collection.on("add", this.addOne, this);
        this.collection.on("reset", this.addAll, this);
        this.collection.on("change", this.foo, this);
    },

    foo: function() {
        console.log("foo");
    },

    filterByName: function(event) {
        console.log(event.keyCode);// + ":" + String.fromCharCode(event.keyCode));
    },

    filter: function(event) {
        console.log("apply filter with name [" + this.$accountName.val() 
            + "] and number [" + this.$accountNumber.val() 
            + "] and selected [" + this.$accountSelected.prop("checked")
            + "]");

        var selected = this.$accountSelected.prop("checked");
        this.collection.setFilter("selected", selected);
        this.collection.pager();
    },

    changed: function() {
        console.log("changed value [" + this.$accountName.val() 
            + "] [" + this.$accountNumber.val() + "]");
    },

    selectAll: function() {
        console.log("select all");

        // for every (each) model in this collection, set model.selected to true
        console.log("> length : " + this.collection.length);
        console.log("> all length : " + this.collection.sortedAndFilteredModels.length);

        _.each(this.collection.sortedAndFilteredModels, function(account) {
            // account.set("selected", true);
            account.select(true);
        });
    },

    selectNone: function() {
        console.log("select none");
        _.each(this.collection.sortedAndFilteredModels, function(account) {
            // account.set("selected", false);
            account.select(false);
        });
    },

    render: function() {
        this.addAll();
        return this;
    },

    addAll: function() {
        this.$tbody.empty();
        this.collection.each(this.addOne, this);
    },

    addOne: function(account) {
        var view = new AccountView({model: account});
        this.$tbody.append(view.render().el);
    }

});

$(function() {
    // try loading accounts
    var accounts = new PaginatedAccounts();
    // do fake fetch (to initialize pageSize etc) - it'll fail
    accounts.fetch();
    accounts.reset(response.values);
    console.log("count before pager : " + accounts.length);
    accounts.pager();
    console.log("count after pager : " + accounts.length);

    var searchView = new SearchAccount({collection: accounts});
    searchView.render();
});