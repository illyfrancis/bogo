// Require.js allows us to configure shortcut alias
require.config({
    // baseUrl: ".",
    paths: {
        "jquery": "../lib/jquery-1.9.1",
        "jquery.ui": "../lib/jquery-ui-1.9.0.custom",
        "bootstrap": "../lib/bootstrap",
        "underscore": "../lib/underscore-1.4.4",
        "backbone": "../lib/backbone-0.9.10",
        "backbone.paginator": "../lib/backbone.paginator",
        "moment": "../lib/moment",
        "text": "../lib/require/text"
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "backbone.paginator": {
            deps: ["backbone"]
        },
        "jquery.ui": {
            deps: ["jquery"]
        },
        "bootstrap": {
            deps: ["jquery", "jquery.ui"]
        }
    }

    // hack!! - forcing jquery.ui to be loaded before bootstrap, refactor, instead, to only use jquery.ui.datepicker plugin becasue bootstrap.tooltip is
    // blown away by jquery.ui.tooltip plugin if it"s loaded after bootstrap loads.
    // ,
    // urlArgs: "bust=" + (new Date()).getTime()
});

require(["init"], function (init) {
    // init();
});