define([
    "jquery",
    "underscore",
    "backbone",
    "text!templates/SecurityCategoryFilter.html"
], function ($, _, Backbone, tpl) {

    var SecurityCategoryFilter = Backbone.View.extend({

        template: _.template(tpl),

        render: function () {
            console.log("SecurityCategoryFilter: render");
            this.$el.html(this.template());
            return this;
        }

    });

    return SecurityCategoryFilter;

});