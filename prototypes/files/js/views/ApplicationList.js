define([
    "jquery",
    "underscore",
    "backbone",
    "views/Application"
], function ($, _, Backbone, Application) {

    return Backbone.View.extend({
        tagName: "ul",

        initialize: function () {
            // collections = responses
        },

        render: function () {
            console.log("ApplicationList: render()");
            this.$el.empty();
            this.collection.each(this.appendItem, this);
            return this;
        },

        appendItem: function (answer) {
            var item = new Application({
                model: answer
            });

            // register the item for events.
            item.listenTo(this, "dispose", item.remove);

            this.$el.append(item.render().el);
        }
    });

});