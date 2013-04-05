define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/PreferenceItem.html'
], function ($, _, Backbone, tpl) {

    var PreferenceItem = Backbone.View.extend({

        tagName: 'li',

        template: _.template(tpl),

        events: {
            'click i': 'removeItem',
            'click': 'selectItem'
        },

        initialize: function () {
            // model = Preference
        },

        removeItem: function (e) {
            console.log('remove item : ' + this.model.get('name'));
            e.stopPropagation();
            // TODO - confirm modal for yes/no
            this.model.destroy();
        },

        selectItem: function () {
            console.log('selected : ' + this.model.get('name'));
            this.model.collection.each(function (item) {
                item.set('selected', false, { silent:true });
            });
            this.model.set('selected', true);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            if (this.model.get('selected')) {
                this.$('i.selected').addClass('icon-star');
            }

            return this;
        }

    });

    return PreferenceItem;

});