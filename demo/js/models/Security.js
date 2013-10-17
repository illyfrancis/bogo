/*global define*/
define(['backbone'], function (Backbone) {

    var Security = Backbone.Model.extend({

        defaults: {
            securityId: '',
            type: ''
        }

    });

    return Security;

});