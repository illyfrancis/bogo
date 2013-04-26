/*global define*/
define(['underscore', 'backbone', 'require'], function (_, Backbone, require) {

    var TreeNode = Backbone.Model.extend({

        defaults: {
            name: 'default name',
            value: '',
            selected: false
        },

        initialize: function () {
            // resolve circular dependency
            var Tree = require('collections/Tree');

            // replace the list with collection.
            var subTree = new Tree(this.get('list'));
            this.set('subTree', subTree);
            this.unset('list');
        },

        toggle: function () {
            this.set('selected', !this.attributes.selected);
        },

        isLeaf: function () {
            return this.get('subTree').length === 0;
        },

        descendants: function (offspring) {
            if (offspring === undefined) {
                offspring = [];
            }

            var subTree = this.get('subTree');
            subTree.each(function (node) {
                offspring.push(node);
                node.descendants(offspring);
            });
            return offspring;
        },

        allDescendantsSelected: function () {
            return _.all(this.descendants(), function (node) {
                return node.get('selected');
            });
        },

        anyDescendantsSelected: function () {
            return _.any(this.descendants(), function (node) {
                return node.get('selected');
            });
        }

    });

    return TreeNode;
});