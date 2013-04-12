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

        initialize: function () {
        },

        // TODO appears to be not used by anything!
        applyFilter: function () {
            this.setFilter(true);
        },

        removeFilter: function () {
            this.setFilter(false);
        },

        toggleFilter: function () {
            this.setFilter(!this.get('isApplied'));
        },

        setFilter: function (status) {
            this.set('isApplied', status);
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

        query: function () {
            return {};
        }
    });

    return Criterion;

});