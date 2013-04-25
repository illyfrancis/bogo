define([
    'jquery',
    'underscore',
    'backbone',
    'models/Country',
    'text!templates/SettlementLocations2.html',
    'text!templates/SettlementLocation.html'
], function ($, _, Backbone, Country, tpl, locationTpl) {

    var SettlementLocation = Backbone.View.extend({

        tagName: 'tr',

        template: _.template(locationTpl),

        events: {
            'click .remove': 'removeLocation'
        },

        initialize: function () {
            // model = Country
            // options.locations = Countries
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        removeLocation: function () {
            // this.model.collection.remove(this.model);
            this.options.locations.remove(this.model);   // check this!
            this.dispose();
        }
    });

    var SettlementLocations = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            'click i': 'removeLocation'
        },

        initialize: function () {
            // collection = Countries
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'remove', this.render);
        },

        render: function () {
            this.$el.empty();
            this.$el.html(this.template({locations: this.collection.toJSON()}));
            return this;
        },

        removeLocation: function (a, b, c, d) {
            var x = this.collection;
        }
    });

    return SettlementLocations;
});