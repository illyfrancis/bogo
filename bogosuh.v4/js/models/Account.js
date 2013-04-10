/*global define*/
define(['backbone'], function (Backbone) {

    var Account = Backbone.Model.extend({

        defaults: {
            name: '',
            number: '',
            selected: false
        },

        toggle: function () {
            this.set('selected', !this.get('selected'));
        },

        select: function (state) {
            this.set('selected', state === true);
        },

        // not DRY...
        // used by PaginatedAccounts.clearSelection
        clear: function () {
            this.set({
                selected: false
            });
        }

    });

    return Account;

});