var Security = Backbone.Model.extend({
    defaults: {
        securityId: "",
        securityIdType: ""
    }
});

var SecurityCollection = Backbone.Collection.extend({
    model: Security
});

var SecurityView = Backbone.View.extend({
    el: "#lookahead",

    events: {
        "change input": "onChange",
        "click .add-security": "addSecurity",
        "click .remove-security": "removeSecurity"
    },

    removeSecurity: function(e) {
        alert("remove");

    },

    addSecurity: function() {
        // validate input value (
        // e.g. (a) it must be 3 chars or longer,
        // (b) this.collection must be valid
        // (c) the val must be found in the collection
        console.log("here");

        var $typeahead = this.$el.find("input.lookup");

        if ($typeahead.val().length < 3) {
            console.log("cannot add security");
            return;
        }

        if (this.collection) {
            var security = this.collection.find(function(item) {
                return item.get("name") === $typeahead.val();
            });

            if (security) {
                console.log("found security : " + security);
            } else {
                console.log("no security found");
            }
        }
    },

    onChange: function(e) {
        // debugger;
        console.log("change : " + e.eventPhase + " : " + e.target);

        if (!_.isUndefined(this.selected)) {
            var security = this.collection.find(function (item) {
                return item.get("name") === this.selected;
            }, this);

            console.log("selected : " + this.selected + ", obj : " + JSON.stringify(security));
        }
    },

    lookupSecurity: function(query, process) {
        // debugger;
        // async response $.ajax(...) on success invoke process with data items.
        this.options.self.collection = new SecurityCollection([{
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

        process(this.options.self.collection.pluck("name"));
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
            self: this
        });

        return this;
    }
});

$(function() {

    var view = new SecurityView();
    $("body").append(view.render().el);
    $("[rel='tooltip']").tooltip();
});