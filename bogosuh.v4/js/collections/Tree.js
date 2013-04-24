/*global define*/
define(['underscore', 'backbone', 'models/TreeNode'], function (_, Backbone, TreeNode) {

    var Tree = Backbone.Collection.extend({

        model: TreeNode,

        leaves: function (leafNodes) {
            if (leafNodes === undefined) {
                leafNodes = [];
            }

            this.each(function (node) {
                if (node.isLeaf()) {
                    leafNodes.push(node);
                } else {
                    node.subTree.leaves(leafNodes);
                }
            });
            return leafNodes;
        },

        selectByValues: function (values) {
            _.each(this.leaves(), function (node) {
                // this version sets 'selected' state regardless, hence no
                // need to 'reset' the selection beforehand.
                var selection = _.contains(values, node.get('value'));
                node.set({ 'selected': selection });
                // TODO review this, might be a bit excessive, instead TreeItem.onSelfChange
                // could trigger 'chidChange' event
                node.trigger('childChange');
            });
        },

        selectedValues: function () {
            var selectedValues = [];
            _.each(this.leaves(), function (node) {
                if (node.get('selected')) {
                    // selectedValues.push[node.get('value')];
                    // TODO - review above statement - push[] is strange?
                    selectedValues.push(node.get('value'));
                }
            });
            return selectedValues;
        },

        hasSelection: function () {
            return _.any(this.leaves(), function (node) {
                return node.get('selected');
            });
        }

    });

    return Tree;

});