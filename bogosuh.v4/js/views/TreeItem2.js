define([
    'jquery',
    'underscore',
    'backbone',
    'require',
    'text!templates/TreeItem2.html'
], function ($, _, Backbone, require, tpl) {

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
            this.listenTo(this.model.subItems, 'childChange', this.onChildrenChange);
        },

        onClick: function (e) {
            this.model.toggle();
            // for events to trickle up.
            this.notifyParent();
        },

        notifyParent: function () {
            this.model.trigger('childChange');
        },

        toggleFolder: function () {
            if (!this.model.isLeaf()) {
                this.$el.next('ul:first').toggle('hide');

                var $e = this.$el.find('span i');
                if ($e.removeClass().data('expanded')) {
                    // $e.addClass('icon-chevron-right').data('expanded', false);
                    $e.addClass('icon-plus-sign').data('expanded', false);
                    // $e.addClass('icon-folder-close').data('expanded', false);
                } else {
                    // $e.addClass('icon-chevron-down').data('expanded', true);
                    $e.addClass('icon-minus-sign').data('expanded', true);
                    // $e.addClass('icon-folder-open').data('expanded', true);
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
                // this.$el.find('span i').removeClass();
                this.$el.find('span i').removeClass().addClass('icon-minus');
                // this.$el.find('span i').removeClass().addClass('icon-file');
            }

            // render subitems
            if (!this.model.isLeaf()) {
                var Tree = require('views/Tree');
                var subTreeView = this.createSubView(Tree, {
                    collection: this.model.subItems
                });

                parent.$el.append(subTreeView.render().el);
                // collapse when first appended
                subTreeView.collapse();
            }
        },

        onSelfChange: function () {
            var selected = this.model.get('selected');
            this.setCheckbox(selected, false);

            // update self & descendants to the new selected state, the change event in descendants will cause themselves to redraw.
            _.each(this.model.descendants(), function (item) {
                item.set({
                    selected: selected
                });
            });
        },

        onChildrenChange: function () {
            var selected, indeterminate;

            if (this.model.allDescendantsSelected()) {
                selected = true;
                indeterminate = false;
            } else if (this.model.anyDescendantsSelected()) {
                selected = false;
                indeterminate = true;
            } else {
                selected = false;
                indeterminate = false;
            }

            this.setCheckbox(selected, indeterminate);
            this.model.set({
                selected: selected
            }, {
                silent: true
            });
            this.notifyParent();
        },

        setCheckbox: function (selected, indeterminate) {
            this.$el.find('input:checkbox').prop('checked', selected).prop('indeterminate', indeterminate);
        }

    });

    return TreeItem;
});