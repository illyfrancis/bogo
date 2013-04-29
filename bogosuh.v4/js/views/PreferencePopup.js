define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'models/Preference',
    'text!templates/PreferencePopup.html',
    'text!templates/PreferencePopupDelete.html'
], function (_, Backbone, EventBus, Repository, Preference, tpl, tplDelete) {

    // modal
    var PreferencePopup = Backbone.View.extend({

        template: _.template(tpl),

        deleteTemplate: _.template(tplDelete),

        events: {
            'click .cancel-save': 'hide',
            'click .save-new': 'saveNew',
            'click .save': 'savePreference',
            'click .cancel-delete': 'hide',
            'click .delete': 'deletePreference'
        },

        initialize: function () {
            // model = Preference
            this.collection = Repository.preferences();
            this.listenTo(EventBus, 'confirmSave', this.confirmSave);
            this.listenTo(EventBus, 'confirmDelete', this.confirmDelete);
        },

        confirmSave: function (preference) {

            if (_.isUndefined(preference)) {
                this.model = new Preference();
            } else {
                this.model = preference;
            }

            this.$el.empty();
            this.$el.html(this.template(_.extend({
                isNew: this.model.isNew()
            }, this.model.toJSON())));

            this.show();
        },

        saveNew: function () {
            this.hide();
            EventBus.trigger('confirmSave');
        },

        savePreference: function () {
            // bind the name
            var name = this.$('.preference-name').val();
            this.model.set('name', _.escape(name));

            if (this.model.isValid()) {
                EventBus.trigger('savePreference', this.model);
                this.hide();
            } else {
                this.$('.control-group').addClass('error');
                this.$('.help-inline').text(this.model.validationError);
            }
        },

        confirmDelete: function (id) {
            this.model = this.collection.get(id);
            this.$el.empty();
            this.$el.html(this.deleteTemplate(this.model.toJSON()));

            this.show();
        },

        deletePreference: function () {
            if (this.model.get('selected')) {
                EventBus.trigger('clearPreference');
            }

            this.model.destroy();
            this.hide();
        },

        show: function () {
            this.$('.preferences-popup').modal();
        },

        hide: function () {
            this.$('.preferences-popup').modal('hide');
        }

    });

    return PreferencePopup;
});