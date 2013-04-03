define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/AccountRow.html'
], function ($, _, Backbone, tpl) {

    var AccountRow = Backbone.View.extend({

        tagName: 'tr',

        template: _.template(tpl),

        events: {
            'click': 'toggleSelection'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.empty();
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        updateSelection: function (checked) {
            this.model.select(checked);
        },

        toggleSelection: function () {
            this.model.toggle();
        }

    });

    return AccountRow;

});