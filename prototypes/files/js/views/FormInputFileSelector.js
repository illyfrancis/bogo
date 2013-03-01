define([
    "jquery",
    "underscore",
    "backbone"
], function ($, _, Backbone) {

    return Backbone.View.extend({

        tagName: "div",

        template: _.template("<div class='input-append ie_hide'><input id='pretty-input' type='text'><a class='btn'>Browse</a></div><input class='hide file-input' type='file' name='files[]' multiple /><output></output>"),

        events: {
            "change .file-input": "handleFileSelect",
            "click #pretty-input": "onclick",
            "click a": "onclick"
        },

        initialize: function () {

        // http://simplysmartmedia.com/2012/11/the-ugly-bootstrap-file-input-type/
        
        // <div class='input-append ie_hide'>
        //   <input id='pretty-input' class='input-large' type='text' onclick='$('input[id=file]').click();'>
        //   <a class='btn' onclick='$('input[id=file]').click();'>Browse</a>
        // </div>

        },

        onclick: function () {
            this.$(".file-input").click();
        },

        handleFileSelect: function (e) {
            console.log("handle");
            var files = e.target.files; // FileList object

            // files is a FileList of File objects. List some properties.
            var i, f, output = [], filename = [];
            for (i = 0; i < files.length; i++) {
                f = files[i];
                output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                    f.size, ' bytes, last modified: ',
                    f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                    '</li>');

                filename.push(escape(f.name));
            }

            this.$("output").html("<ul>" + output.join("") + "</ul>");

            // and update pretty input
            // debugger;
            this.$('#pretty-input').val(filename.join(","));

            this.trigger("file:select", files);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

});