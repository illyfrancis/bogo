define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'apps/Extension2',
    'apps/EventBus',
    'apps/Repository',
    'apps/Mediator',
    'views/DemoApp'
], function ($, _, Backbone, Bootstrap, Extension, EventBus, Repository, Mediator, DemoApp) {
    // disable cache (esp for IE)
    $.ajaxSetup({ cache: false });

    // enable tooltips
    $('body').tooltip({
        selector: '[rel=tooltip]'
    });

    // loader
    $('#loader').hide();
    $(document).ajaxStart(function () {
        $('#loader').show();
    }).ajaxStop(function () {
        $('#loader').hide();
    });

    //-------------------------------------------------------------------------
    // Mediator
    //-------------------------------------------------------------------------
    new Mediator(EventBus);

    //-------------------------------------------------------------------------
    // main app (app.views.bogo)
    //-------------------------------------------------------------------------
    new DemoApp().load();
});
