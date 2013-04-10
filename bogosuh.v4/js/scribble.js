/*global define*/
var app = app || {};

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'apps/Extension',
    'apps/EventBus',
    'apps/Repository',
    'apps/Mediator'
], function ($, _, Backbone, Bootstrap, Extension, EventBus, Repository, Mediator) {

    var Listener = Backbone.View.extend({
        initialize: function () {
            // this.model
            this.listenTo(this.model, 'change', this.logit);
        },

        logit: function () {
            console.log('model changed');
        }
    });

    var Baz = Backbone.Model.extend({
        defaults: {
            name: 'hello',
            value: '123'
        }
    });

    app.m = new Baz();
    var listener = new Listener({
        model: app.m
    });


});
