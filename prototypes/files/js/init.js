/*global define*/
define([
    "jquery",
    "underscore",
    "backbone",
    "bootstrap",
    "views/Foo"
], function ($, _, Backbone, Bootstrap, Foo) {

    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    // $(function () {
        var foo = new Foo();
        foo.render();
    // });

});
