define([
    'backbone',
    'models/Country',
    'views/SettlementLocation',
    'text!templates/SettlementLocations.html'
], function (Backbone, Country, SettlementLocation, tpl) {

    var SettlementLocations = Backbone.View.extend({

        template: _.template(tpl),

        initialize: function () {
            // collection = Countries
            this.listenTo(this.collection, 'add remove reset', this.render);
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