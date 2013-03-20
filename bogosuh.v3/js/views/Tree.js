define([
    "jquery",
    "underscore",
    "backbone",
    "views/TreeItem"
], function ($, _, Backbone, TreeItem) {

    var Tree = Backbone.View.extend({

        tagName: "ul",

        className: "nav nav-list",

        render: function () {
            // collection = TreeCollection
            // tree collection is children of the model
            this.collection.each(this.appendItem, this);
            return this;
        },

        appendItem: function (item) {
            var itemView = new TreeItem({
                model: item
            });
            itemView.appendTo(this);
            itemView.listenTo(this, "tree:dispose", itemView.remove);
        },

        refresh: function () {
            // trigger child change event to force redraw on parents.
            _.each(this.collection.leaves(), function (item) {
                item.trigger("childChange");
            });
        },

        collapse: function () {
            this.$el.addClass("hide");
        },

        remove: function () {
            console.log("remove - tree");
            this.trigger("tree:dispose");
            Backbone.View.prototype.remove.call(this);
            return this;
        }
    });

    return Tree;
});