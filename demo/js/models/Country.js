/*global define*/
define(['backbone'], function (Backbone) {

    var Country = Backbone.Model.extend({

        defaults: {
            code: '',
            desc: ''
        },

        idAttribute: '_id',

        label: function () {
            return this.get('code') + ' - ' + this.get('desc');
        }

        
    });

    return Country;

});