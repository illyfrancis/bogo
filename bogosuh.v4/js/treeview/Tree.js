define([
    'jquery',
    'underscore',
    'backbone',
    'treeview/TreeNode'
], function ($, _, Backbone, TreeNode) {

    var Tree = Backbone.View.extend({

        tagName: 'ul',

        className: 'nav nav-list',

        render: function () {
            // collection = TreeCollection
            // tree collection is children of the model
            this.collection.each(this.appendNode, this);
            return this;
        },

        appendNode: function (node) {
            var nodeView = this.createSubView(TreeNode, {
                model: node
            });

            nodeView.appendTo(this);
        },

        collapse: function () {
            this.$el.addClass('hide');
        }

    });

    return Tree;
});