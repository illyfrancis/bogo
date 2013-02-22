define([
    "underscore",
    "backbone",
    "text!templates/FilterStatusBadge.html"
], function (_, Backbone, tpl) {

    var FilterStatusBadge = Backbone.View.extend({

        tagName: "span",

        template: _.template(tpl),

        events: {
            "click a.remove-filter": "removeFilter",
            "click a.show-filter": "showFilter"
        },

        initialize: function () {
            // model = ReportCriteria
            this.listenTo(this.model, "change:isApplied", this.filterChange);
        },

        removeFilter: function () {
            this.model.removeFilter();
        },

        showFilter: function () {
            var criteriaName = this.model.get("name");
            app.EventBus.trigger("showFilters", criteriaName);
        },

        render: function () {
            this.$el.empty();
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        filterChange: function () {
            if (this.model.get("isApplied")) {
                return;
            }

            // remove this view if filter is no longer applied.
            this.remove();
        }

    });

    return FilterStatusBadge;

});