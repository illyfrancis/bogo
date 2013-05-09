/*global define*/
var app = app || {};
app.data = app.data || {};

var console = console || {};
console.log = console.log ||  function () {};

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'apps/Extension',
    'apps/EventBus',
    'apps/Repository',
    'apps/Mediator',
    'views/BogoApp'
], function ($, _, Backbone, Bootstrap, Extension, EventBus, Repository, Mediator, BogoApp) {

    // No need to wrap within ready()
    // $(function () {
    // });

    // disable cache (esp for IE)
    $.ajaxSetup({ cache: false });

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
    new Mediator(EventBus);

    //-------------------------------------------------------------------------
    // main app (app.views.bogo)
    //-------------------------------------------------------------------------
    var bogo = new BogoApp();
    bogo.load();

    // export
    app.bogo = bogo;
    app.repo = Repository;
    app.ev = EventBus;

    
});
