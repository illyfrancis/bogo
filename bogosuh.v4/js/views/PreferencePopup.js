define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    // modal
    var PreferencePopup = Backbone.View.extend({

        initialize: function () {
            // model = Preference
        }

        // looks like this view should know if it's new / existing from the model.
        // so all we need is a command to say if it's save or delete.

        // Q. for update it should be okay for PreferenceDropdown view but for 'new'
        // how should the new model be attached to the collection?

    });

    return PreferencePopup;
});