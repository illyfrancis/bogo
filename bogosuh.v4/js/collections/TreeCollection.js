/*global define*/
define(["underscore", "backbone", "models/TreeModel"], function (_, Backbone, TreeModel) {

    var TreeCollection = Backbone.Collection.extend({

        model: TreeModel,

        leaves: function (leafNodes) {
            if (leafNodes === undefined) {
                leafNodes = [];
            }

            this.each(function (item) {
                if (item.isLeaf()) {
                    leafNodes.push(item);
                } else {
                    item.subItems.leaves(leafNodes);
                }
            });
            return leafNodes;
        },

        selectByValues: function (values) {
            _.each(this.leaves(), function (item) {

                // this version sets 'selected' state regardless, hence no
                // need to 'reset' the selection beforehand.
                var selection = _.contains(values, item.get("value"));
                item.set({ "selected": selection });
                item.trigger("childChange");    // TODO review this, might be a bit excessive.

                // if (_.contains(values, item.get("value"))) {
                //     item.set({ "selected": true });
                //     item.trigger("childChange");
                // }
            });
        },

        _selectByValues: function (values) {
            _.each(this.leaves(), function (item) {
                if (_.contains(values, item.get("value"))) {
                    item.set({
                        "selected": true
                    }, {
                        silent: true
                    });
                }
            });
        },

        selectedValues: function () {
            var selectedValues = [];
            _.each(this.leaves(), function (item) {
                if (item.get("selected")) {
                    // selectedValues.push[item.get("value")];
                    // TODO - review above statement - push[] is strange?
                    selectedValues.push(item.get("value"));
                }
            });
            return selectedValues;
        },

        hasSelection: function () {
            return _.any(this.leaves(), function (item) {
                return item.get("selected");
            });
        }

    });

    return TreeCollection;

});