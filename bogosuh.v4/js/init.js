/*global define*/
var app = app || {};
app.data = app.data || {};

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'apps/Extension',
    'views/BogoApp',
    'views/BaseView',
    'apps/Repository'
], function ($, _, Backbone, Bootstrap, Extension, BogoApp, Foo, Repository) {

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
    // main app (app.views.bogo)
    //-------------------------------------------------------------------------
    app.Bogo = new BogoApp();
    app.Bogo.load();
    app.Repository = Repository;

    // app.foo = new Foo();
    // $('body').append(app.foo.render().el);

});
