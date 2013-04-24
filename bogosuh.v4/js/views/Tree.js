define([
    'jquery',
    'underscore',
    'backbone',
    'views/TreeItem'
], function ($, _, Backbone, TreeItem) {

    var Tree = Backbone.View.extend({

        tagName: 'ul',

        className: 'nav nav-list',

        render: function () {
            // collection = Tree
            // tree collection is children of the model
            this.collection.each(this.appendItem, this);
            return this;
        },

        appendItem: function (item) {
            var itemView = this.createSubView(TreeItem, {
                model: item
            });

            itemView.appendTo(this);
        },

        refresh: function () {
            // trigger child change event to force redraw on parents.
            _.each(this.collection.leaves(), function (item) {
                item.trigger('childChange');
            });
        },

        collapse: function () {
            this.$el.addClass('hide');
        }

    });

    return Tree;
});