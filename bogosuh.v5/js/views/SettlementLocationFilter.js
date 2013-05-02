define([
    'underscore',
    'backbone',
    'models/Country',
    'collections/Countries',
    'views/SettlementLocations',
    'text!templates/SettlementLocationFilter.html'
], function (_, Backbone, Country, Countries, SettlementLocations, tpl) {

    var SettlementLocationFilter = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            'click .add-country': 'addLocation',
            'focus .lookup': 'clearError'
        },

        initialize: function () {
            // model = SettlementLocationCriterion
            this.locations = this.model.locations;
            this.settlementLocations = this.createSubView(SettlementLocations, {
                collection: this.locations
            });

            // holds the most recent lookups
            this.searcher = new Countries();
        },

        render: function () {
            console.log('render');
            this.renderOnce();
            return this;
        },

        renderOnce: _.once(function () {
            this.$el.html(this.template());
            this.$el.append(this.settlementLocations.render().el);
            this.$('.lookup').typeahead({
                source: this.lookupLocation,
                minLength: 2,
                matcher: this.matcher,
                updater: this.updater,
                searcher: this.searcher
            });
        }),

        matcher: function (item) {
            // no further matching needed
            return true;
        },

        updater: function (item) {
            // take the first two (country code)
            return item.slice(0, 2);
        },

        lookupLocation: function (query, process) {
            this.options.searcher.url = '/api/country/search?q=' + query;
            this.options.searcher.fetch({
                success: function (collection, response, options) {
                    var mapped = collection.map(function (country) {
                        return country.label();
                    });
                    process(mapped);
                },
                error: function () {
                    process(['Not found']);   // TODO
                }
            });
        },

        addLocation: function () {
            var found, code = this.$('.lookup').val();

            // look for it
            found = this.searcher.findWhere({code: code.toUpperCase()});
            if (found) {
                this.locations.add(found);
                this.$('.lookup').val('');
            } else {
                this.showError();
            }
        },

        showError: function () {
            this.$('.location-lookup').addClass('error');
            this.$('.help-inline').show();
        },

        clearError: function () {
            this.$('.location-lookup').removeClass('error');
            this.$('.help-inline').hide();
        }

    });

    return SettlementLocationFilter;
});