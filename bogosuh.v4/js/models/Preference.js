define(['backbone'], function (Backbone) {

    // what is a preference?

    var _preference = {
        id: '123',
        name: 'Anything really',
        values: {

        }
    };

    var preferences; // is a collection of preference


    var Preference = Backbone.Model.extend({

        defaults: {
            name: '',
            description: []
            // values: []
        },

        idAttribute: '_id', // map to mongo's id

        urlRoot: '/api/preferences',

        parse: function (response, options) {
            // ??
            console.log('r: ' + response + ' || ' + 'o: ' + options);

            this.values = JSON.parse(response.description);

            // need to return the response??
            return response;
        }

    });

    // persist a preference with search criteria

    // create a dummy account criterion
    var account = new Backbone.Model();
    account.set({
        isApplied: true,
        accountNumbers: ['0015594','0067173','0067249']
    });

    // create a dummy transaction type criterion
    var transasctionType = new Backbone.Model();
    transasctionType.set({
        isApplied: true,
        types: ['DVW','RVP','REC'],
        id: 'TR001'
    });

    var prefs = [];
    prefs.push(account.toJSON());
    prefs.push(transasctionType.toJSON());

    var j = JSON.stringify(prefs);

    var preference = new Preference();
    preference.set({
        // name: (new Date()).toISOString(),
        name: (new Date()).toString(),
        description: j
    });


    preference.save();
    app.x = preference;


    return Preference;

});