define([
    'underscore',
    'backbone',
    'bootstrap',
    'text!templates/Progress.html'
], function (_, Backbone, Bootstrap, tpl) {

    var Progress = Backbone.View.extend({

        template: _.template(tpl),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template());
            // don't want extra outer div tag, reset the view.el
            var pane = this.$el.children('div:first').get(0);
            this.setElement(pane);

            return this;
        },

        show: function(msg) {
            // console.log('Progress: showing [' + msg + ']');
            this.$el.modal();
        },

        hide: function() {
            // console.log('Progress: hide');
            this.$el.modal('hide');
        }
    });

    return Progress;

});