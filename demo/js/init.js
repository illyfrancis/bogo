// var app = app || {};
// app.data = app.data || {};

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'apps/Extension2',
    'apps/EventBus',
    'apps/Repository',
    'apps/Mediator',
    'views/BogoApp'
], function ($, _, Backbone, Bootstrap, Extension, EventBus, Repository, Mediator, BogoApp) {
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
        $('#loadingDiv').show();
    }).ajaxStop(function () {
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
    // app.bogo = bogo;
    // app.repo = Repository;
    // app.ev = EventBus;
});
