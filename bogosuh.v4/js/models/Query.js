/*global define*/
define(['backbone'], function (Backbone) {

    // performs query as POST when GET cannot be used due to the excessive size of query string.
    // Query object encapsulates search criteria, fields and sort information and POST it in
    // request payload.
    var Query = Backbone.Model.extend({

        defaults: {
            criteria: "",
            fields: "",
            sort: ""
        },

        limit: 10,
        offset: 0,
        searchUrl: '/api/transactions/search',

        initialize: function (attr, options) {
            // set limit, offset and searchUrl
            options = options || {};
            _.extend(this, _.pick(options, 'limit', 'offset', 'searchUrl'));

            // search url
            var queryParam = '?limit={{limit}}&offset={{offset}}';
            this.searchUrl = this.searchUrl.concat(queryParam);

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