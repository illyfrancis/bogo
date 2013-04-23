define([
    'jquery',
    'underscore',
    'backbone',
    'treeview/Tree'
], function ($, _, Backbone, Tree) {

    var TreeRoot = Backbone.View.extend({

        tagName: 'div',

        initialize: function () {
            this.tree = this.createSubView(Tree, {collection: this.model.subTree});
        },

        render: function () {
            this.$el.append(this.tree.render().el);
            return this;
        }

    });

    return TreeRoot;
});