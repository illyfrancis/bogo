define([
    'jquery',
    'underscore',
    'backbone',
    'models/Country',
    'collections/Countries',
    'views/SettlementLocations',
    'text!templates/SettlementLocationFilter.html'
], function ($, _, Backbone, Country, Countries, SettlementLocations, tpl) {

    var SettlementLocationFilter = Backbone.View.extend({

        template: _.template(tpl),

        events: {
            'click .add-country': 'addLocation',
            'focus .lookup': 'clearError'
        },

        initialize: function () {
            // model = SettlementLocationCriterion, but for now do below.
            this.locations = new Countries();

            // holds the most recent lookups
            this.searcher = new Countries();

            this.settlementLocations = this.createSubView(SettlementLocations, {
                collection: this.locations
            });
        },

        render: function () {
            console.log('SettlementLocationFilter: render');

            this.$el.html(this.template());
            this.$el.append(this.settlementLocations.render().el);
            this.$('.lookup').typeahead({
                source: this.lookupLocation,
                minLength: 2,
                matcher: this.matcher,
                updater: this.updater,
                searcher: this.searcher
            });

            return this;
        },

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
            var code = this.$('.lookup').val();

            // look for it
            var found = this.searcher.findWhere({code: code.toUpperCase()});
            if (found) {
                console.log('found ' + found.label());
                this.locations.add(found);
                this.$('.lookup').val('');
            } else {
                this.showError();
            }

            console.log(JSON.stringify('locations : ' + JSON.stringify(this.locations)));
        },

        showError: function () {
            this.$('.location-lookup').addClass('error');
            this.$('.help-inline').show();
        },

        clearError: function () {
            console.log('clear');
            this.$('.location-lookup').removeClass('error');
            this.$('.help-inline').hide();
        }

    });

    return SettlementLocationFilter;
});