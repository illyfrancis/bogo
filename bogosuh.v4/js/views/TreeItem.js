define([
    'underscore',
    'backbone',
    'require',
    'text!templates/TreeItem.html'
], function (_, Backbone, require, tpl) {

    var TreeItem = Backbone.View.extend({

        tagName: 'li',

        className: 'tree',

        template: _.template(tpl),

        events: {
            'click input:checkbox': 'onClick',
            'click span': 'toggleFolder'
        },

        initialize: function () {
            // model = TreeNode
            this.listenTo(this.model, 'change:selected', this.onSelfChange);
            this.listenTo(this.model.get('subTree'), 'change:selected', this.onChildrenChange);
        },

        onClick: function (e) {
            this.model.toggle();
        },

        toggleFolder: function () {
            if (!this.model.isLeaf()) {
                this.$el.next('ul:first').toggle('hide');

                var $e = this.$el.find('span i');
                if ($e.removeClass().data('expanded')) {
                    $e.addClass('icon-plus-sign').data('expanded', false);
                } else {
                    $e.addClass('icon-minus-sign').data('expanded', true);
                }
            }
        },

        appendTo: function (parent) {
            // render self
            this.$el.html(this.template(this.model.toJSON()));
            this.setCheckbox(this.model.get('selected'), false);
            parent.$el.append(this.el);

            // node icon
            if (this.model.isLeaf()) {
                this.$el.find('span i').removeClass().addClass('icon-minus');
            }

            // render subTree
            if (!this.model.isLeaf()) {
                var Tree = require('views/Tree');
                var subTreeView = this.createSubView(Tree, {
                    collection: this.model.get('subTree')
                });

                parent.$el.append(subTreeView.render().el);
                // collapse when first appended
                subTreeView.collapse();
            }
        },

        onSelfChange: function () {
            var selected = this.model.get('selected');
            this.setCheckbox(selected);

            // update self & descendants to the new selected state, the change
            // event in descendants will cause themselves to redraw.
            if (!_.isNull(selected)) {
                _.each(this.model.descendants(), function (node) {
                    node.set({ selected: selected });
                });
            }
        },

        onChildrenChange: function () {
            var selected = false;

            if (this.model.allDescendantsSelected()) {
                selected = true;
            } else if (this.model.anyDescendantsSelected()) {
                selected = null;
            }

            this.setCheckbox(selected);
            this.model.set({ selected: selected });
        },

        setCheckbox: function (selected) {
            var indeterminate = _.isNull(selected) ? true : false;
            selected = _.isNull(selected) ? false : selected;
            this.$el.find('input:checkbox').prop('checked', selected).prop('indeterminate', indeterminate);
        }

    });

    return TreeItem;
});