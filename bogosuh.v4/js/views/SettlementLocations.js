define([
    'jquery',
    'underscore',
    'backbone',
    'models/Country',
    'text!templates/SettlementLocations.html',
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
            this.options.locations.remove(this.model);   // check this!
        }
    });

    var SettlementLocations = Backbone.View.extend({

        template: _.template(tpl),

        initialize: function () {
            // collection = Countries
            this.listenTo(this.collection, 'add remove', this.render);
        },

        render: function () {
            this.disposeSubViews();
            this.$el.empty();
            this.$el.html(this.template({empty: this.collection.length === 0}));
            this.collection.each(this.appendLocation, this);
            return this;
        },

        appendLocation: function (country) {
            var line = this.createSubView(SettlementLocation, {
                model: country,
                locations: this.collection
            });
            this.$('.locations').append(line.render().el);
        }
    });

    return SettlementLocations;
});