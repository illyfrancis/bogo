define([
    'models/Criterion',
    'collections/Countries'
], function (Criterion, Countries) {

    var SettlementLocationCriterion = Criterion.extend({

        initialize: function () {
            this.set({
                'name': 'SettlementLocation',
                'title': 'Settlement Location'
            });

            this.locations = new Countries();
        },

        validate: function (attrs) {
            if(attrs.isApplied) {
                console.log('settlement location criterion: validate');
            }
        },

        hydrate: function (data) {
            // TODO - DRY it
            // expect data is in the form of { locations: [array of codes], isApplied: boolean}
            var invalid = _.isUndefined(data) || _.isUndefined(data.locations) || _.isUndefined(data.isApplied),
                valid = !invalid && _.isArray(data.locations) && _.isBoolean(data.isApplied);

            if (valid) {
                this.locations.reset();
                this.locations.fetchByCodes(data.locations);
                this.setFilter(data.isApplied);
            }
        },

        preserve: function () {
            var data = Criterion.prototype.preserve.call(this);
            data.locations = this.locations.codes();
            return data;
        },

        reset: function () {
            this.locations.reset();
            this.removeFilter();
        },

        queryCriteria: function () {
            return {
                location: {
                    $in: this.locations.codes()
                }
            };
        }
    });

    return SettlementLocationCriterion;

});