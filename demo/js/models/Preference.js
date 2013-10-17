define(['backbone'], function (Backbone) {

    // what is a preference?

    var _preference_example = {
        id: '123',
        name: 'Anything really',
        values: {
            // this is unique to each app.
            criteria: [
                { name: 'Account', isApplied: false, accountNumbers: ['123', '234'] },
                { name: 'TransactionType', isApplied: false, types: ['DVW','RVP','REC'], id: 'TR001' }
            ],
            schema: [
                { name: 'accountName', position: 1, sort: 'desc' },
                { name: 'clientRefId', position: 2, sort: '' }
            ]
        }
    };

    var Preference = Backbone.Model.extend({

        defaults: {
            name: '',
            values: [],
            selected: false // not persisted
        },

        idAttribute: '_id', // map to mongo's id

        urlRoot: '/api/preferences',

        validate: function (attributes, options) {
            // name must exist
            var name = attributes.name;
            if (_.isUndefined(name) || _.isNull(name) || name.length === 0) {
                return 'Please enter name';
            }

            if (name.length >= 80) {
                return 'Too long';
            }
        }

        // nothing to parse..?
/*        parse: function (response, options) {
            // ??
            // console.log('r: ' + response + ' || ' + 'o: ' + options);

            this.parsed = JSON.parse(response.values);

            // need to return the response??
            return response;
        }
*/
    });

    return Preference;

});