define([
    'underscore',
    'backbone',
    'text!templates/SecurityCategory.html'
], function (_, Backbone, tpl) {

    var SecurityCategory = Backbone.View.extend({

        tagName: 'tr',

        template: _.template(tpl),

        events: {
            'click' : 'toggle'
        },

        initialize: function () {
            this.listenTo(this.model, 'change:selected', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        toggle: function () {
            this.model.toggle();
        }
    });

    return SecurityCategory;

});