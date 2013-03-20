/*global define*/
var app = app || {};
app.data = app.data || {};

define([
    "jquery",
    "underscore",
    "backbone",
    "bootstrap",
    "views/ViewManager",
    "views/BogoApp"
], function ($, _, Backbone, Bootstrap, ViewManager, BogoApp) {

    // place bootstraped models here
    // the idea is that we place JSON string within reset(***) for rendering, escape all </ within JSON for security measure (refer to http://backbonejs.org/#FAQ-bootstrap)
    // TODO - consider placing class defs in App.Models or App.Collections (depends on how RequireJS expect directory names)
    // and place instances under app.models etc. But for now just use lower cases.

    // $(function () {

        // enable tooltips
        $("body").tooltip({
            selector: "[rel=tooltip]"
        });

        //-------------------------------------------------------------------------
        // main app (app.views.bogo)
        //-------------------------------------------------------------------------
        app.Bogo = new BogoApp();
        app.Bogo.render();

        // loading image
        // http://stackoverflow.com/questions/68485/how-to-show-loading-spinner-in-jquery
        $("#loadingDiv")
            .hide()  // hide it initially
            .ajaxStart(function () {
                $(this).show();
            })
            .ajaxStop(function () {
                $(this).hide();
            });
    // });

});
