/*global requirejs*/
var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return /Spec\.js$/.test(file);
});

// var tests = [ '/base/test/jasmine/spec/apps/FormatterSpec.js',
//     '/base/test/jasmine/spec/collections/AccountsSpec.js',
//     '/base/test/jasmine/spec/collections/ReportSchemaSpec.js',
//     '/base/test/jasmine/spec/models/AccountCriterionSpec.js',
//     '/base/test/jasmine/spec/models/AccountSpec.js',
//     '/base/test/jasmine/spec/models/DateRangeSpec.js',
//     '/base/test/jasmine/spec/models/QuerySpec.js',
//     '/base/test/jasmine/spec/models/TransactionSpec.js',
//     '/base/test/jasmine/spec/models/TreeNodeSpec.js' ];

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/js',

    paths: {
        // from main.js
        'jquery': '../lib/jquery-1.8.2',
        'jquery.ui': '../lib/jquery-ui-1.9.0.custom',
        'bootstrap': '../lib/bootstrap',    // v2.2.1
        'underscore': '../lib/underscore-1.4.4',
        'backbone': '../lib/backbone-1.0.0',
        'backbone.paginator': '../lib/backbone.paginator-0.7.0',
        'moment': '../lib/moment',
        'text': '../lib/require/text',
        // for tests
        'jasmine': '../test/lib/jasmine-1.2.0/jasmine',
        'jasmine-html': '../test/lib/jasmine-1.2.0/jasmine-html',
        'sinon': '../test/lib/sinon/sinon-1.6.0',
        'jasmine-sinon': '../test/lib/jasmine-sinon',
        'jasmine-jquery': '../test/lib/jasmine-jquery'
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
        },
        'sinon': {
            exports: 'sinon'
        },
        'jasmine-sinon': {
            exports: 'sinonJasmine'
        },
        'jasmine-jquery': {
            exports: 'jasmine-jquery'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});