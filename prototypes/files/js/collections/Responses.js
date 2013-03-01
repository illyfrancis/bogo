define(["underscore", "backbone", "models/Answers"], function (_, Backbone, Answers) {

    return Backbone.Collection.extend({
        model: Answers
    });

});