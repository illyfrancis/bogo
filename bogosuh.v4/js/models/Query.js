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

        execute: function (page) {
            this.offset = this._convertPageToOffset(page);

            // call save() which in turn invoke Backbone.sync
            this.save({}, this.callbacks);
        },

        _convertPageToOffset: function (page) {
            return (!_.isNumber(page) || _.isNaN(page) || page <= 0) ? 0 : page - 1;
        }

    });

    return Query;

});