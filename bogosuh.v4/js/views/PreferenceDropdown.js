define([
    'jquery',
    'underscore',
    'backbone',
    'views/PreferenceItem',
    'text!templates/Preferences.html'
], function ($, _, Backbone, PreferenceItem, tpl) {

    var Preference = Backbone.Model.extend({
        defaults: {
            name: '',
            selected: false
        }
    });

    var PreferenceDropdown = Backbone.View.extend({

        template: _.template(tpl),

        className: 'baz',

        events: {
            'click li.none': 'clearSelection',
            'click .preference': 'savePreference'
        },

        initialize: function () {
            // collection = Preferences...
            this.collection = new Backbone.Collection();
            this.collection.add(new Preference({name:'one'}));
            this.collection.add(new Preference({name:'two'}));
            this.collection.add(new Preference({name:'three'}));

            this.listenTo(this.collection, 'destroy', this.render);
            this.listenTo(this.collection, 'change', this.render);
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
            } else {
                console.log('save nuew');
            }

        }

    });

    return PreferenceDropdown;
});