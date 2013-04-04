define(['backbone'], function (Backbone) {

    // extend Backbone.View
    Backbone.View = Backbone.View.extend({

        // Use it instead of 'new' to create a view for auto disposal
        // of the sub view in response to disposal events either by
        // 'disposeSubViews' or 'dispose' from the parent view.
        createSubView: function (viewClass, options) {
            var view = new viewClass(options);
            view.listenTo(this, 'dispose:views', view.dispose);
            return view;
        },

        // Call to trigger disposal of any sub views created via
        // 'createSubView' function.
        disposeSubViews: function () {
            this.trigger('dispose:views');
        },

        // Call to dispose any sub views created via 'createSubView' function
        // and remove itself according to Backbone.View.remove() function.
        dispose: function () {
            this.disposeSubViews();
            this.remove();
            return this;
        }

    });

});