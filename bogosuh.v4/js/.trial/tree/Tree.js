define(['underscore', 'backbone', 'tree/TreeNode'], function (_, Backbone, TreeNode) {

    var Tree = Backbone.Collection.extend({

        model: TreeNode,

        // TODO - could this be moved to TreeNode?
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
                node.trigger('childChange');    // TODO review this, might be a bit excessive.
            });
        },

        selectedValues: function () {
            var selectedValues = [];
            _.each(this.leaves(), function (item) {
                if (item.get('selected')) {
                    selectedValues.push(item.get('value'));
                }
            });
            return selectedValues;
        },

        hasSelection: function () {
            return _.any(this.leaves(), function (item) {
                return item.get('selected');
            });
        }

    });

    return Tree;

});