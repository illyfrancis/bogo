require.config({
    baseUrl: "../../js/",
    urlArgs: 'cb=' + Math.random(),
    paths: {
        'jquery': '../lib/jquery-1.8.2',
        'jquery.ui': '../lib/jquery-ui-1.9.0.custom',
        'bootstrap': '../lib/bootstrap',
        'underscore': '../lib/underscore',
        'backbone': '../lib/backbone',
        'backbone.paginator': '../lib/backbone.paginator',
        'moment': "../lib/moment",
        'text': '../lib/require/text',
        'jasmine': '../test/lib/jasmine-1.2.0/jasmine',
        'jasmine-html': '../test/lib/jasmine-1.2.0/jasmine-html',
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
        }
    }
    // hack!! - forcing jquery.ui to be loaded before bootstrap, refactor, instead, to only use jquery.ui.datepicker plugin becasue bootstrap.tooltip is
    // blown away by jquery.ui.tooltip plugin if it's loaded after bootstrap loads.
});

window.store = "TestStore"; // override local storage store name - for testing
require(['underscore', 'jquery', 'jasmine-html'], function (_, $, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('spec/models/AccountSpec');
    specs.push('spec/models/DateRangeSpec');
    specs.push('spec/models/AccountCriteriaSpec');
    specs.push('spec/models/ReportCriteriaSpec');
    specs.push('spec/collections/AccountsSpec');
    // specs.push('spec/models/TodoSpec');
    // specs.push('spec/views/FiltersSpec');

    $(function () {
        require(specs, function () {
            jasmineEnv.execute();
        });
    });

});