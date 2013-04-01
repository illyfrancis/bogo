define([
    "jquery",
    "underscore",
    "backbone",
    "events/EventBus",
    "text!templates/ReportColumnHeader.html"
], function ($, _, Backbone, EventBus, tpl) {

    var ReportColumnHeader = Backbone.View.extend({

        tagName: "th",

        className: "",

        template: _.template(tpl),

        events: {
            "click i": "onClickForFilter",
            "click": "onClickForSort"
        },

        initialize: function (options) {
            // model = ReportColumn
            this.searchCriteria = options.searchCriteria;
            this.searchCriteria.on("change:isApplied", this.render, this);
        },

        onClickForFilter: function (e) {
            e.stopPropagation();
            var criteriaName = this.model.get("criteria");
            EventBus.trigger("showFilters", criteriaName);
        },

        onClickForSort: function (e) {
            this.model.reverseSort();
            this.model.removeSortFromOtherColumns();
            EventBus.trigger("startSearch");
        },

        render: function () {
            // TODO displose view
            this.$el.empty();
            this.$el.html(this.template(this.model.toJSON()));

            // adjust filter icon according to criteria's applied state.
            if(this.searchCriteria.isCriterionApplied(this.model.get("criteria"))) {
                this.$el.children("i").removeClass("icon-white");
            }

            var $sortDirection = this.$el.children("span.pull-right");
            if(this.model.isSortAsc()) {
                $sortDirection.addClass("caret").removeClass("caron");
            } else if(this.model.isSortDesc()) {
                $sortDirection.removeClass("caret").addClass("caron");
            } else {
                $sortDirection.removeClass("caret caron");
            }

            return this;
        }
    });

    return ReportColumnHeader;

});