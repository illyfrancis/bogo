define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap'
], function ($, _, Backbone, Bootstrap) {

    var Workspace = Backbone.Router.extend({

        routes: {
            'help': 'help',
            'search/:query': 'search'
        },

        help: function () {
            console.log('help function');
        },

        search: function (query) {
            console.log('search function and query ' + query);
        }
    });

    return Workspace;

});
