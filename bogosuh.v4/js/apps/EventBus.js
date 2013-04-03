/*global define*/
define(['backbone', 'underscore'], function (Backbone, _) {

    // Event aggregator
    var eventbus = {};
    _.extend(eventbus, Backbone.Events);
    return eventbus;
    
});