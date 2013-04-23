define(['underscore', 'backbone', 'tree/Tree'], function (_, Backbone, Tree) {

    var TreeRoot = Backbone.Model.extend({

        defaults: {
            name: 'Root',
            nodes: []
        },

        initialize: function () {
            // replace the list with collection.
            this.subTree = new Tree(this.get('nodes'));
            // set itself as parent on the subTree.
            this.subTree.invoke('setParent', this);
        }
    });

    return TreeRoot;
});