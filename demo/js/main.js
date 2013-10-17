require.config({
    paths: {
        'jquery': '../lib/jquery-1.8.2',
        'jquery.ui': '../lib/jquery-ui-1.9.0.custom',
        'bootstrap': '../lib/bootstrap',
        'underscore': '../lib/underscore-1.4.4',
        'backbone': '../lib/backbone-1.0.0',
        'backbone.paginator': '../lib/backbone.paginator-0.7.0',
        'moment': '../lib/moment',
        'text': '../lib/require/text'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.paginator': {
            deps: ['backbone']
        },
        'jquery.ui': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery', 'jquery.ui']
        }
    }
});

require(['init'], function (init) {});