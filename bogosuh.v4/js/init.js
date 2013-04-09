/*global define*/
var app = app || {};
app.data = app.data || {};

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'apps/Extension',
    'apps/EventBus',
    'apps/Repository',
    'apps/Mediator',
    'views/BogoApp',
    'models/Preference'
], function ($, _, Backbone, Bootstrap, Extension, EventBus, Repository, Mediator, BogoApp, Preference) {

    // No need to wrap within ready()
    // $(function () {
    // });

    // enable tooltips
    $('body').tooltip({
        selector: '[rel=tooltip]'
    });

    // loading image
    // http://stackoverflow.com/questions/68485/how-to-show-loading-spinner-in-jquery
    $('#loadingDiv').hide();
    $(document).ajaxStart(function () {
        console.log('ajax start');
        $('#loadingDiv').show();
    }).ajaxStop(function () {
        console.log('ajax stop');
        $('#loadingDiv').hide();
    });

    //-------------------------------------------------------------------------
    // Mediator
    //-------------------------------------------------------------------------
    app.Mediator = new Mediator(EventBus);

    //-------------------------------------------------------------------------
    // main app (app.views.bogo)
    //-------------------------------------------------------------------------
    app.Bogo = new BogoApp();
    app.Bogo.load();
    app.Repository = Repository;

    // ---

    app.pref = new Backbone.Model();
    app.pref.urlRoot = '/api/preferences';
    app.pref.idAttribute = "_id";    // need this!
    app.pref.set({
        name: 'one',
        description: (new Date()).toString()
    });

    app.prefs = new Backbone.Collection();
    app.prefs.url = '/api/preferences';

});
