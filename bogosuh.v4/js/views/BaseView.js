define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

/*    // extend Backbone.View
    Backbone.View = Backbone.View.extend({
        createSubView: function (viewClass, options) {
            var view = new viewClass(options);
            view.listenTo(this, 'dispose:views', view.dispose);
            return view;
        },

        disposeSubViews: function () {
            this.trigger('dispose:views');
        },

        dispose: function () {
            console.log('dispose [' + this.tagName + ']');
            this.disposeSubViews();
            this.remove();
            return this;
        }
    });*/
/*
    // extend Backbone.View for managing child views
    BaseView = Backbone.View.extend({
        createSubView: function (viewClass, options) {
            var view = new viewClass(options);
            view.listenTo(this, 'dispose:views', view.remove);
            return view;
        },

        disposeSubViews: function () {
            this.trigger('dispose:views');
        },

        remove: function () {
            console.log('remove [' + this.tagName + ']');
            this.disposeSubViews();
            Backbone.View.prototype.remove.call(this);
            return this;
        }
    });*/

    var Child = Backbone.Model.extend({
        defaults: {
            name: 'child one'
        }
    });

    var SubView = Backbone.View.extend({

        tagName: 'li',

        render: function () {
            this.$el.html(this.model.get('name'));
            return this;
        }

    });

    var ParentView = Backbone.View.extend({

        tagName: 'ul',

        initialize: function () {
            this.data = new Child();
        },

        render: function () {

            var subView = this.createSubView(SubView, { model: this.data });
            this.$el.append(subView.render().el);
            return this;
        }

    });

    return ParentView;

});