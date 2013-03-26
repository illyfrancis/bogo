/*global define*/
define(["backbone", "underscore"], function (Backbone, _) {

    var eventbus = {};
    _.extend(eventbus, Backbone.Events);
    return eventbus;
    
});