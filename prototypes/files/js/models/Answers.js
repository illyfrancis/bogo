/*global define*/
define(["backbone"], function (Backbone) {

    return Backbone.Model.extend({
        getTier: function () {
            return this.get("c12");
        }
    });

});