var Security = Backbone.Model.extend({
    defaults: {
        securityId: "",
        securityIdType: ""
    }
});

var SecurityCollection = Backbone.Collection.extend({
    model: Security
});

var SecurityRow = Backbone.View.extend({
    tagName: "tr",

    template: _.template('<td><%= securityId %></td><td class="right-align"><i class="icon-remove-sign remove-security"></i></td>'),

    events: {
        "click .remove-security": "removeSecurity"
    },

    initialize: function () {
        // this.model.on("change", this.render, this);
    },

    render: function () {
        console.log("SecurityList: render");

        this.$el.empty(); // needed?
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    removeSecurity: function () {
        console.log("remove " + this.model.get("securityId"));
        this.collection.remove(this.model);
    }
});

var SecurityView = Backbone.View.extend({
    el: "#lookahead",

    events: {
        "click .add-security": "addSecurity"
    },

    initialize: function () {
        this.collection.on("add", this.renderSecurities, this);
        this.collection.on("remove", this.renderSecurities, this);
    },

    removeSecurity: function(e) {
        console.log("remove");
    },

    addSecurity: function() {
        // validate input value (
        // e.g. (a) it must be 3 chars or longer,
        // (b) this.securities must be valid
        // (c) the val must be found in the securities
        console.log("addSecurity");

        var selected = this.selectedSecurity();
        if (!_.isUndefined(selected)) {
            // check for duplicates?
            this.collection.add(selected);
            this.selected = null;
            this.$el.find("input.lookup").val("");
        }
    },

    selectedSecurity: function () {
        var security;

        if (this.$el.find("input.lookup").val() === "") {
            this.selected = null;
        }

        if (!(_.isUndefined(this.selected) || _.isNull(this.selected))) {
            security = this.securities.find(function (item) {
                return item.get("name") === this.selected;
            }, this);
            console.log("selected : " + this.selected + ", obj : " + JSON.stringify(security));
        }

        return security;
    },

    lookupSecurity: function(query, process) {
        // debugger;
        // async response $.ajax(...) on success invoke process with data items.
        this.options.self.securities = new SecurityCollection([{
                name: "Hello",
                securityId: "001",
                securityIdType: "isin"
            }, {
                name: "hi",
                securityId: "abc",
                securityIdType: "sedol"
            }, {
                name: "howdy",
                securityId: "z012",
                securityIdType: "acme"
            }, {
                name: "ahoy",
                securityId: "002",
                securityIdType: "isin"
            }, {
                name: "hola",
                securityId: "C20",
                securityIdType: "zulu"
        }]);

        process(this.options.self.securities.pluck("name"));
    },

    updater: function (item) {
        this.options.self.selected = item;
        return item;
    },

    render: function() {
        this.$el.find("input.lookup").typeahead({
            source: this.lookupSecurity,
            updater: this.updater,
            minLength: 1,
            self: this  // the security
        });

        this.renderSecurities();

        return this;
    },

    renderSecurities: function () {
        this.$table = this.$el.find("table tbody");
        // dispose previous rows
        this.$table.empty();
        this.collection.each(this.appendSecurity, this);
        return this;
    },

    appendSecurity: function (security) {
        console.log("append");
        var securityRow = new SecurityRow({
            model: security,
            collection: this.collection
        });

        this.$table.append(securityRow.render().el);
    }
});

$(function() {
    var securities = new SecurityCollection([{
            securityId: "1234", securityIdType: "isin"
        }, {
            securityId: "C201", securityIdType: "sedol"
    }]);
    var view = new SecurityView({collection: securities});
    $("body").append(view.render().el);
    $("[rel='tooltip']").tooltip();
});