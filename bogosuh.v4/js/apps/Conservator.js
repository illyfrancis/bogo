define([
    'backbone',
    'underscore',
    'apps/Repository'
], function (Backbone, _, Repository) {

    var Conservator = function () {
        this.initialize();
    };

    _.extend(Conservator.prototype, {
        
        initialize: function () {
        },

        hydrate: function (preference, searchCriteria, reportSchema) {
            // fetched successfully, can select this one in the dropdown
            // var preferences = Repository.preferences();
            // preferences.select(preference);

            var data = JSON.parse(preference.get('values'));
            searchCriteria.hydrate(data.criteria);
            reportSchema.hydrate(data.schema);
        },

        preserve: function (preference, searchCriteria, reportSchema) {
            // take current snapshot
            console.log("Conservator: preserve");

            var criteria = searchCriteria.preserve();
            var schema = reportSchema.preserve();
            var data = {
                criteria: criteria.criteria,    // review this, maybe drop 'criteria' from return value and just return array.
                schema: schema.schema
            };

            preference.set({
                values: JSON.stringify(data)
            });

            return preference;
        }

    });

    return Conservator;

});