define([
    "jquery",
    "underscore",
    "backbone"
], function ($, _, Backbone) {

    return Backbone.View.extend({

        tagName: "div",

        template: _.template("<input type='file' name='files[]' multiple /><output></output>"),

        events: {
            "change input": "handleFileSelect"
        },

        initialize: function () {

        },

        handleFileSelect: function (e) {
            console.log("handle");
            var files = e.target.files; // FileList object

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

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

});