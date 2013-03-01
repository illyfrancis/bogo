/*global define*/
define([
    "jquery",
    "underscore",
    "backbone",
    "bootstrap",
    "views/MainApp"
], function ($, _, Backbone, Bootstrap, App) {

    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    // $(function () {
        var app = new App();
        app.render();
    // });

});
