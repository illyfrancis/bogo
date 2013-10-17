define(['backbone'], function (Backbone) {

    // extend Backbone.View
    var View = Backbone.View;
    Backbone.View = Backbone.View.extend({

        createSubView: function (viewClass, options) {
            var view = new viewClass(options);
            // if (!(view instanceof Backbone.View)) {
            //     throw new Error("Subviews must be a Backbone.View");
            // }

            if (!this.subviews) {
                this.subviews = [];
            }

            this.subviews.push(view);
            return view;
        },

        disposeSubViews: function() {
            if (this.subviews) {
                var children = this.subviews;
                for (var i = 0, l = children.length; i<l; i++) {
                    children[i].remove();
                }
                this.subviews = [];
            }
            return this;
        },

        dispose: function () {
            this.remove();
        },

        remove: function() {
            this.disposeSubViews();
            return View.prototype.remove.apply(this, arguments);
        }
    });

});