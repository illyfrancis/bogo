define([
    "jquery",
    "underscore",
    "backbone",
    "views/FileSelector",
    "views/ApplicationList",
    "data"
], function ($, _, Backbone, FileSelector, ApplicationList, data) {

    return Backbone.View.extend({

        el: "body",

        initialize: function () {
            this.fileSelector = new FileSelector();
            this.listenTo(this.fileSelector, "loaded", this.showList);
        },

        render: function () {
            this.$el.append(this.fileSelector.render().el);
        },

        showList: function () {
            console.log("showList: loaded fired");
            var list = new ApplicationList({
                collection: data.responses
            });
            this.$el.append(list.render().el);
        }

    });

});