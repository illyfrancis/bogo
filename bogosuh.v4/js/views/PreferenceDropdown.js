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

            this.listenTo(this.collection, 'destroy', this.render);
            this.listenTo(this.collection, 'change', this.render);
            this.listenTo(this.collection, 'add', this.render);
        },

        render: function () {
            this.disposeSubViews();

            this.$el.empty();
            this.$el.html(this.template({
                selected: this.hasSelection(),
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
            console.log('clearSelection');

            // clear selection
            this.collection.each(function (item) {
                item.set('selected', false, { silent:true });
            });

            // trigger 'reset'
            EventBus.trigger('clearPreference');
            
            this.render();
        },

        hasSelection: function () {
            // TODO - move this into this.collection class
            return this.collection.any(function (item) {
                return item.get('selected') === true;
            });
        },

        savePreference: function () {
            var preference = this.collection.findWhere({
                selected: true
            });


            if (preference) {
                console.log('save.. existing ' + preference.get('name'));
                EventBus.trigger('savePreference', preference.id);
            } else {
                console.log('save nuew');
                EventBus.trigger('savePreference');
            }

        }

    });

    return PreferenceDropdown;
});