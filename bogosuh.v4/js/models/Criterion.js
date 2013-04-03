/*global define, require*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var Criterion = Backbone.Model.extend({

        defaults: {
            name: '',
            title: '',
            isApplied: false,
            restrictions: {}
        },

        initialize: function () {
        },

        // parse: function (response) {
        //     try {
        //         var criteria = {};
        //         if (response.name === 'AccountCriteria') {
        //             console.log('Account criteria');
        //             criteria = AccountCriteria;
        //         } else {
        //             criteria = require('models/' + response.name);
        //         }
        //         // mixin
        //         _.extend(this, criteria);
        //     } catch (err) {
        //         console.log('parse', 'Criteria [' + response.name + '] not found');
        //     }
        //     return response;
        // },

        applyFilter: function () {
            this.set('isApplied', true);
        },

        removeFilter: function () {
            this.set('isApplied', false);
        },

        toggleFilter: function () {
            this.set('isApplied', !this.get('isApplied'));
        },

        preserve: function () {
            // noop
        },

        hydrate: function (json) {
            // noop
            console.log('hydrate', JSON.stringify(json));
        },

        query: function () {
            // noop
        }

    });

    return Criterion;
});