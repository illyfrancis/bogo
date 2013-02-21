define(["underscore", "backbone"], function (_, Backbone) {

    var SecurityCategoryCriteria = {

        validate: function (attrs) {
            if(attrs.isApplied) {
                console.log("security category criteria: validate");
            }
        },

        query: function () {
            return "SecurityCategoryCriteria:JSON";
        }
    };

    return SecurityCategoryCriteria;

});