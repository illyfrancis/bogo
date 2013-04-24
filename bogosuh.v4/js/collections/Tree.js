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
            var selection;
            _.each(this.leaves(), function (node) {
                selection = _.contains(values, node.get('value'));
                if (node.get('selected') !== selection) {
                    node.toggle();
                    node.trigger('childChange');
                }
            });
        },

        selectedValues: function () {
            var selectedValues = [];
            _.each(this.leaves(), function (node) {
                if (node.get('selected')) {
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