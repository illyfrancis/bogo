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
            this.listenTo(this.model, 'change:selected', this.renderChange);
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

        renderChange: function (model) {
            var selected = model.attributes.selected;
            this.setCheckbox(selected);
        },

        setCheckbox: function (selected) {
            var indeterminate = _.isNull(selected) ? true : false;
            selected = _.isNull(selected) ? false : selected;
            this.$el.find('input:checkbox').prop('checked', selected).prop('indeterminate', indeterminate);
        }

    });

    return TreeItem;
});