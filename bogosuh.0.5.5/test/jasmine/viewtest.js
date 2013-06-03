require.config({
    baseUrl: "../../js/",
    urlArgs: 'cb=' + Math.random(),
    paths: {
        'jquery': '../lib/jquery-1.8.2',
        'jquery.ui': '../lib/jquery-ui-1.9.0.custom',
        'bootstrap': '../lib/bootstrap',
        'underscore': '../lib/underscore',
        'backbone': '../lib/backbone-1.0.0',
        'backbone.paginator': '../lib/backbone.paginator',
        'moment': "../lib/moment",
        'text': '../lib/require/text',
        'jasmine': '../test/lib/jasmine-1.2.0/jasmine',
        'jasmine-html': '../test/lib/jasmine-1.2.0/jasmine-html',
        'sinon': '../test/lib/sinon/sinon-1.6.0',
        'jasmine-sinon': '../test/lib/jasmine-sinon',   // sinon matcher https://github.com/froots/jasmine-sinon
        'jasmine-jquery': '../test/lib/jasmine-jquery',
        'extension': '../js/apps/Extension2',
        'spec': '../test/jasmine/spec/'
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
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'jasmine-sinon': {
            deps: ['jasmine', 'sinon'],
            exports: 'sinonJasmine'
        },
        'jasmine-jquery': {
            deps: ['jasmine']
        },
        'extension': {
            deps: ['backbone']
        }
    }
    // hack!! - forcing jquery.ui to be loaded before bootstrap, refactor, instead, to only use jquery.ui.datepicker plugin becasue bootstrap.tooltip is
    // blown away by jquery.ui.tooltip plugin if it's loaded after bootstrap loads.
});

window.store = "TestStore"; // override local storage store name - for testing
require(['underscore', 'jasmine-html', 'sinon', 'jasmine-sinon', 'jasmine-jquery', 'bootstrap', 'moment', 'extension'], function (_, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];
    specs.push('spec/views/FilterStatusBadgeSpec');
    specs.push('spec/views/AccountPaginatorSpec');
    specs.push('spec/views/AccountRowSpec');
    specs.push('spec/views/AccountListSpec');

    require(specs, function () {
        jasmineEnv.execute();
    });
});