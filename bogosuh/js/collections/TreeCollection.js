var app = app || {};
app.collections = app.collections || {};

app.collections.TreeCollection = Backbone.Collection.extend({

    model: app.models.TreeModel,

    leaves: function(leafNodes) {
        if (leafNodes === undefined) {
            leafNodes = [];
        }

        this.each(function(item) {
            if (item.isLeaf()) {
                leafNodes.push(item);
            } else {
                item.subItems.leaves(leafNodes);
            }
        });
        return leafNodes;
    },

    selectByValues: function(values) {
        _.each(this.leaves(), function(item) {
            if (_.contains(values, item.get("value"))) {
                item.set({"selected": true}, {silent: true});
            }
        });
    },

    selectedValues: function() {
        var selectedValues = [];
        _.each(this.leaves(), function(item) {
            if (item.get("selected")) {
                selectedValues.push[item.get("value")];
            }
        });
        return selectedValues;
    },

    hasSelection: function() {
        return _.any(this.leaves(), function(item) {
            return item.get("selected");
        });
    }

});
