define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'views/PreferenceDropdown',
    'text!templates/AppMenu.html'
], function (_, Backbone, EventBus, PreferenceDropdown, tpl) {

    var AppMenu = Backbone.View.extend({

        template: _.template(tpl),

        render: function () {
            this.$el.empty();
            this.$el.html(this.template());
            return this;
        }
        
    });

    return AppMenu;

});