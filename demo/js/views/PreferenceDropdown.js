define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'models/Preference',
    'views/PreferenceItem',
    'text!templates/Preferences.html'
], function (_, Backbone, EventBus, Repository, Preference, PreferenceItem, tpl) {

    var PreferenceDropdown = Backbone.View.extend({

        template: _.template(tpl),

        className: 'btn-group',

        events: {
            'click li.none': 'clearSelection',
            'click .preference': 'savePreference'
        },

        initialize: function () {
            // collection = Preferences...
            this.collection = Repository.preferences();
            this.listenTo(this.collection, 'change:selected add destroy', this.render);
        },

        render: function () {
            this.disposeSubViews();

            this.$el.empty();
            this.$el.html(this.template({
                selected: this.collection.hasSelection(),
                empty: this.collection.isEmpty()
            }));

            this.collection.each(this.appendItem, this);

            return this;
        },

        appendItem: function (preference) {
            var item = this.createSubView(PreferenceItem, {
                model: preference
            });

            this.$('.dropdown-menu').prepend(item.render().el);
        },

        clearSelection: function () {
            // console.log('clearSelection');

            // clear selection
            this.collection.clearSelection({ silent:true });

            // trigger 'reset'
            EventBus.trigger('clearPreference');
            
            this.render();
        },

        savePreference: function () {
            var preference = this.collection.findWhere({
                selected: true
            });

            EventBus.trigger('confirmSave', preference);
        }

    });

    return PreferenceDropdown;
});