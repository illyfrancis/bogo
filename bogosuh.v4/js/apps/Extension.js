define(['backbone'], function (Backbone) {

    // extend Backbone.View
    Backbone.View = Backbone.View.extend({
        createSubView: function (viewClass, options) {
            var view = new viewClass(options);
            view.listenTo(this, 'dispose:views', view.dispose);
            return view;
        },

        disposeSubViews: function () {
            console.log('disposeSubViews from [' + this.tagName + ']');
            this.trigger('dispose:views');
        },

        dispose: function () {
            this.disposeSubViews();
            console.log('dispose [' + this.tagName + ']');
            this.remove();
            return this;
        }
    });

});