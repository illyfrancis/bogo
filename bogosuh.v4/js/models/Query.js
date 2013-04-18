/*global define*/
define(['backbone'], function (Backbone) {

    var Query = Backbone.Model.extend({

        defaults: {
            criteria: "",
            fields: "",
            sort: ""
        },

        limit: 10,
        offset: 0,
        searchUrl: '/api/transactions/search?limit={{limit}}&offset={{offset}}',

        initialize: function (attr, options) {
            // set limit and offset
            options = options || {};
            _.extend(this, _.pick(options, 'limit', 'offset'));

            // default callbacks
            this.callbacks = _.pick(options, 'success', 'error');
        },

        urlRoot: function () {
            return this.searchUrl.replace('{{limit}}', this.limit).replace('{{offset}}', this.offset);
        },

        execute: function (offset) {
            this.offset = this._validateOffset(offset);

            // call save() which in turn invoke Backbone.sync
            this.save({}, this.callbacks);
        },

        next: function () {
            this.execute(this.offset + 1);
        },

        previous: function () {
            this.execute(this.offset - 1);
        },

        _validateOffset: function (offset) {
            return (!_.isNumber(offset) || _.isNaN(offset) || offset <= 0) ? 0 : offset;
        }

    });

    return Query;

});