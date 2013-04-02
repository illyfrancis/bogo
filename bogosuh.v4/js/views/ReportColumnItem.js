define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/ReportColumnItem.html'
], function ($, _, Backbone, tpl) {

    var ReportColumnItem = Backbone.View.extend({

        tagName: 'option',

        template: _.template(tpl),

        events: {
            'dblclick': 'toggle'
        },

        initialize: function () {
            // model = ReportColumn
        },

        toggle: function (e) {
            e.stopPropagation();
            this.model.toggle();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.prop('value', this.model.cid);
            return this;
        }
    });

    return ReportColumnItem;
});