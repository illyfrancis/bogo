/*global define*/
var app = app || {};

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'apps/Extension',
    'apps/EventBus',
    'apps/Repository',
    'apps/Mediator'
], function ($, _, Backbone, Bootstrap, Extension, EventBus, Repository, Mediator) {

    function chunk(array, process, context){
        setTimeout(function(){
            var item = array.shift();
            process.call(context, item);

            if (array.length > 0){
                setTimeout(arguments.callee, 100);
            }
        }, 100);
    }

    var names = ["Nicholas", "Steve", "Doug", "Bill", "Ben", "Dion"],
        todo = names.concat();  //clone the array

    chunk(todo, function(item){
        console.log(item);
    });

});
