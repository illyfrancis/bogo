/*global define*/
var app = app || {};
app.data = app.data || {};

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'router'
], function ($, _, Backbone, Bootstrap, Router) {

    var router = new Router();
    app.r = router;
    // Backbone.history.start({pushState: true});
    Backbone.history.start();
    router.navigate('help', {trigger: true});

});
