define([
    "jquery",
    "underscore",
    "backbone"
], function ($, _, Backbone) {

    return Backbone.View.extend({

        tagName: "div",

        template: _.template("<div class='drop_zone'>Drop files here</div><output></output>"),

        events: {
            "drop .drop_zone": "handleFileSelect",
            "dragover .drop_zone": "handleDragover"
        },

        initialize: function () {
        },

        handleFileSelect: function (e) {
            console.log("handleFileSelect");

            e.stopPropagation();
            e.preventDefault();

            var files = e.originalEvent.dataTransfer.files; // FileList object.

            // files is a FileList of File objects. List some properties.
            var i, f, output = [];
            for (i = 0; i < files.length; i++) {
                f = files[i];
                output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                    f.size, ' bytes, last modified: ',
                    f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                    '</li>');
            }

            this.$("output").html("<ul>" + output.join("") + "</ul>");

            this.trigger("file:select", files);
        },

        handleDragover: function (e) {
            // debugger;
            console.log("handleDragover");
            e.stopPropagation();
            e.preventDefault();
            // e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
            e.originalEvent.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

});