define(["underscore", "backbone"], function (_, Backbone) {

    var SettlementLocationCriteria = {

        validate: function (attrs) {
            if(attrs.isApplied) {
                console.log("settlement location criteria: validate");
            }
        },

        query: function () {
            return "SettlementLocationCriteria:JSON";
        }
    };

    return SettlementLocationCriteria;

});