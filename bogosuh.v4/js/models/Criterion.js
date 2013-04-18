/*global define, require*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var Criterion = Backbone.Model.extend({

        defaults: {
            name: '',
            title: '',
            isApplied: false
        },

        removeFilter: function () {
            this.setFilter(false);
        },

        toggleFilter: function () {
            this.setFilter(!this.get('isApplied'));
        },

        setFilter: function (status) {
            this.set('isApplied', status === true);
        },

        hydrate: function (filter) {
            this.setFilter(filter.isApplied);
        },

        preserve: function () {
            return {
                name: this.get('name'),
                isApplied: this.get('isApplied')
            };
        },

        reset: function () {
            this.removeFilter();
        },

        queryCriteria: function () {
            return {};
        }
    });

    return Criterion;

});