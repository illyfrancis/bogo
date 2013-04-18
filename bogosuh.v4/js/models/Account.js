/*global define*/
define(['backbone'], function (Backbone) {

    var Account = Backbone.Model.extend({

        defaults: {
            name: '',
            number: '',
            selected: false
        },

        toggle: function () {
            this.select(!this.attributes.selected);
        },

        select: function (state) {
            this.set('selected', state === true);
        }
        
    });

    return Account;

});