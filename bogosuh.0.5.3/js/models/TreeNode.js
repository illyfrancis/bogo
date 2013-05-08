/*global define*/
define(['underscore', 'backbone', 'require'], function (_, Backbone, require) {

    // avoid calling 'set()' on TreeNode, to update selection state, use
    // 'toggle()' instead which manages child nodes states internally.
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

            this.listenTo(subTree, 'change:selected', this.childSelectionChanged);
        },

        childSelectionChanged: function (e) {
            var selected,
                uniq = _.uniq(this.get('subTree').pluck('selected'));

            if (uniq.length > 1) {
                // e.g. [false, true, null] or [true, null] etc
                selected = null;
            } else {
                selected = uniq[0];
            }

            // triggers 'change:selected' if changed
            this.set('selected', selected);

            // also force trigger 'change:selected' when changing from null to null
            if (_.isNull(selected) && this.get('selected') === selected) {
                this.trigger('change:selected', this);
            }
        },

        toggle: function () {
            this.set('selected', !this.attributes.selected);

            // also set the leaf nodes (bottom most) - any updates for in
            // between nodes should be taken care of by childSelectionChanged
            // function.
            var selected = this.attributes.selected;
            _.each(this.get('subTree').leaves(), function (leaf) {
                leaf.set('selected', selected);
            });
        },

        isLeaf: function () {
            return this.get('subTree').length === 0;
        }

    });

    return TreeNode;
});