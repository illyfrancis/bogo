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
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'jasmine-sinon': {
            deps: ['jasmine', 'sinon']
        }
    }
    // hack!! - forcing jquery.ui to be loaded before bootstrap, refactor, instead, to only use jquery.ui.datepicker plugin becasue bootstrap.tooltip is
    // blown away by jquery.ui.tooltip plugin if it's loaded after bootstrap loads.
});

window.store = "TestStore"; // override local storage store name - for testing
require(['underscore', 'jasmine-html', 'sinon', 'jasmine-sinon', 'moment'], function (_, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];
    specs.push('spec/apps/FormatterSpec');
    specs.push('spec/models/QuerySpec');
    specs.push('spec/models/AccountSpec');
    specs.push('spec/models/TreeNodeSpec');
    specs.push('spec/models/TransactionSpec');
    specs.push('spec/models/DateRangeSpec');
    specs.push('spec/models/AccountCriterionSpec');
    specs.push('spec/collections/ReportSchemaSpec');
    specs.push('spec/collections/PaginatedAccountsSpec');

    require(specs, function () {
        jasmineEnv.execute();
    });
});