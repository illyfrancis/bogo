/*global define*/
define([
    "models/Questions",
    "models/Options",
    "collections/Responses"
], function (Questions, Options, Responses) {

    return {
        questions: new Questions(),
        options: new Options(),
        responses: new Responses()
    };

});