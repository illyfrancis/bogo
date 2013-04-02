define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    // extend Backbone.View for managing child views
    BaseView = Backbone.View.extend({
        create: function (viewClass, options) {
            var view = new viewClass(options);
            view.listenTo(this, 'dispose', view.remove);
            return view;
        },

        dispose: function () {
            this.trigger('dispose');
        },

        remove: function () {
            console.log('remove');
            this.dispose();
            Backbone.View.prototype.remove.call(this);
            return this;
        }
    });

    var Child = Backbone.Model.extend({
        defaults: {
            name: 'child one'
        }
    });

    var SubView = BaseView.extend({

        tagName: 'li',

        render: function () {
            this.$el.html(this.model.get('name'));
            return this;
        }

    });

    var ParentView = BaseView.extend({

        tagName: 'ul',

        initialize: function () {
            this.data = new Child();
        },

        render: function () {

            var subView = this.create(SubView, { model: this.data });
            this.$el.append(subView.render().el);
            return this;
        }

    });

    return ParentView;

});