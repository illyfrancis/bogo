/*global define*/
define(['backbone'], function (Backbone) {

    var SecurityCategory = Backbone.Model.extend({

        defaults: {
            code: '',
            desc: '',
            selected: false
        },

        toggle: function () {
            this.select(!this.attributes.selected);
        },

        select: function (state) {
            this.set('selected', state === true);
        }
        
    });

    return SecurityCategory;

});