define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'text!templates/PreferenceItem.html'
], function (_, Backbone, EventBus, tpl) {

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
            e.stopPropagation();
            EventBus.trigger('confirmDelete', this.model.id);
        },

        selectItem: function () {
            this.model.collection.clearSelection({ silent:true });
            this.model.set('selected', true);

            // trigger with preference id
            EventBus.trigger('loadPreference', this.model.id);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

    return PreferenceItem;

});