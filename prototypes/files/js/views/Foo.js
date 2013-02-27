define([
    "jquery",
    "underscore",
    "backbone",
    "views/FormInputFileSelector",
    "views/DragDropFileSelector"
], function ($, _, Backbone, FormInputFileSelector, DragDropFileSelector) {

    return Backbone.View.extend({

        el: "body",

        initialize: function () {
            this.formInputFileSelector = new FormInputFileSelector();
            this.listenTo(this.formInputFileSelector, "file:select", this.readFiles);

            this.dragDropFileSelector = new DragDropFileSelector();
            this.listenTo(this.dragDropFileSelector, "file:select", this.readFiles);
        },

        readFiles: function (files) {
            console.log("readFiles", files);
            var i;
            for (i = 0; i < files.length; i++) {
                this.readFile(files[i]);
            }
        },

        readFile: function (file) {
            // rudimentary check
            if (!file.name.match('.csv$')) {
                console.log("not csv");
                return;
            }
            console.log("csv", file);

            var reader = new FileReader();
            reader.onloadstart = this.onFileLoadStart(this);
            reader.onprogress = this.onProgress(this);
            reader.onloadend = this.onFileLoadEnd(this);
            reader.onload = this.onFileLoad(this);
            reader.readAsText(file);
            // reader.readAsBinaryString(file);
            // reader.readAsDataURL(file);
            // reader.readAsArrayBuffer(file);
        },

        onFileLoad: function (self) {
            return function(e) {
                var x = e.target.result;
                console.log("onload: loaded [" + e.loaded + "] of [" + e.total + "]");
                self.parse(e.target.result);
            };
        },

        onFileLoadStart: function (self) {
            return function (e) {
                console.log("start: loaded [" + e.loaded + "] of [" + e.total + "]");
                // show the progress bar
                self.$(".waiting").addClass("in");
            };
        },

        onFileLoadEnd: function (self) {
            return function (e) {
                console.log("end: loaded [" + e.loaded + "] of [" + e.total + "]");
                // pause for a bit and remove progress bar
                setTimeout(function () {
                    self.$(".waiting").removeClass("in");
                }, 800);
            };
        },

        onProgress: function (self) {
            return function (e) {
                // console.log("progress: loaded [" + e.loaded + "] of [" + e.total + "]");
                var percentComplete = 0;
                if (e.lengthComputable) {
                    percentComplete = (e.loaded / e.total) * 100;
                }
                self.$(".bar").css("width", percentComplete + "%");
            };
        },

        render: function () {
            console.log("Render foo : " +
                "jQuery : " + $.fn.jquery +
                "underscore : " + _.VERSION
            );

            this.$el.append("<h1>hello</h1>");
            this.$el.append(this.formInputFileSelector.render().el);
            this.$el.append(this.dragDropFileSelector.render().el);
        },

        parse: function (csv) {
            var cols,
                lines = csv.split(/[\r\n|\n]+/);    // split data by line
            console.log("line counts: " + lines.length);
            for (var i = 0; i < lines.length; i++) {
                // console.log(i + " : " + lines[i]);
                // cols = lines[i].split(/,+/);
                
                // cols = lines[i].split(/".*?",|.*?,/);
                // cols = lines[i].match(/".*?",|".*?\n|.*?,|\n/g);

                // cols = lines[i].match(/".*?",|".*?\n|.*?,/g);
                cols = lines[i].match(/".*?",|".*?"$|.*?,/g);


                if (cols) {
                    // cols = /".*?",|.*?,/g.exec(lines[i]);

                    // cols = lines[i].split(","); // don't use regex
                    console.log("col counts: " + cols.length);

                    for (var j = 0; j < cols.length; j++) {
                        console.log("index: " + j + " : " + cols[j]);
                    }
                    
                }


                // ".*?",|.*?,

                // ".*?",|".*?\n|.*?,
            }
        }

    });

});