define([
    'backbone',
    'models/Country',
    'text!templates/SettlementLocation.html'
], function (Backbone, Country, tpl) {

    var SettlementLocation = Backbone.View.extend({

        tagName: 'tr',

        template: _.template(tpl),

        events: {
            'click .remove': 'removeLocation'
        },

        // model = Country
        // options.locations = Countries
        // initialize: function () {
        // },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        removeLocation: function () {
            this.options.locations.remove(this.model);
        }
    });

    return SettlementLocation;
});