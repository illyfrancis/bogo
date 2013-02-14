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
    // tagName: "li",
    tagName: "tr",

    className: "bobo",

    template: _.template('<td><%= securityId %></td><td class="right-align"><i class="icon-remove-sign remove-security"></i></td>'),
    // template: _.template('<%= securityId %>'),

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
        this.collection.remove(this.model, {silent: true});
        this.remove();
    },

    remove: function () {
        Backbone.View.prototype.remove.call(this);
        // this.$el.empty();
        // delete this.$el;
        // delete this.el;
        return this;
    }


});

var SecurityView = Backbone.View.extend({
    el: "#lookahead",

    events: {
        "click .add-security": "addSecurity"
    },

    initialize: function () {
        // old ways
        // this.collection.on("add", this.renderSecurities, this);
        // this.collection.on("remove", this.renderSecurities, this);
        // new ways
        this.listenTo(this.collection, "add", this.renderSecurities);
        this.listenTo(this.collection, "remove", this.renderSecurities);

        // keeps track of nested views (SecurityRow)
        this._securityRows = [];
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

        // 1. this is one way, using empty() but may leave event handlers behind if the nested view
        // has any models or collection listening on an event
        // this.$table.empty();

        // 2. another way: using a list of nested views and call remove() on them
        this.disposeSecurityRows();
        this.collection.each(this.appendSecurityRow, this);

        return this;
    },

    disposeSecurityRows: function () {
        // clean up
        _.each(this._securityRows, function (row) {
            row.remove();
            // row.dispose();
        });

        this._securityRows = [];
    },

    appendSecurityRow: function (security) {
        var securityRow = new SecurityRow({
            model: security,
            collection: this.collection
        });

        // this._securityRows.push(securityRow);

        this.$table.append(securityRow.render().el);
    },

    // override remove
    remove: function () {
        this.disposeSecurityRows();
        return Backbone.View.prototype.remove.call(this);
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

    $(".remove-view").click(function() {
        view.remove();
    });

    $(".add-collection").click(function() {
        securities.add({
            securityId: "abc",
            securityIdType: "xyzs"
        });
    });

    $("[rel='tooltip']").tooltip();
});