define([
    "jquery",
    "underscore",
    "backbone",
    "collections/Securities",
    "text!templates/SecurityIdFilter.html"
], function ($, _, Backbone, Securities, tpl) {

    var SecurityIdFilter = Backbone.View.extend({

        template: _.template(tpl),

        lookupSecurity: function (query, process) {
            console.log("q :" + query);
            var securities = new Securities();
            // cheat
            securities.process = process;
            securities.url = "/api/securities/search/" + query;
            securities.fetch({
                success: function (collection, response, options) {
                    console.log("> s : " + collection.length);
                    collection.process(collection.pluck("secId"));
                }
            });
        },

        render: function () {
            console.log("SecurityIdFilter: render");

            this.$el.html(this.template());
            this.$el.find(".lookup").typeahead({
                source: this.lookupSecurity,
                minLength: 3,
                self: this
            });

            return this;
        }

    });

    return SecurityIdFilter;
});