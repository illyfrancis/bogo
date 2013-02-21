define(["underscore", "backbone"], function (_, Backbone) {

    var SecurityIdCriteria = {

        validate: function (attrs) {
            if(attrs.isApplied) {
                console.log("security id criteria: validate");
            }
        },

        query: function () {
            return "SecurityIdCriteria:JSON";
        }
    };

    return SecurityIdCriteria;

});