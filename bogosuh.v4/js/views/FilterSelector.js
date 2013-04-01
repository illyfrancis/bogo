define([
    "jquery",
    "underscore",
    "backbone",
    "views/FilterSelectorOption",
    "text!templates/FilterSelector.html"
], function ($, _, Backbone, FilterSelectorOption, tpl) {

    var FilterSelector = Backbone.View.extend({
        
        className: "filter-select",

        template: _.template(tpl),

        initialize: function () {
            // collection = SearchCriteria
            this.filterSelectorOptions = {};
        },

        render: function () {
            this.disposeSelectorOptions();
            this.$el.empty();
            this.$el.html(this.template());

            this.collection.each(this.appendFilterOption, this);
        },

        appendFilterOption: function (criterion) {
            var filterOption = new FilterSelectorOption({
                model: criterion
            });

            filterOption.listenTo(this, "dispose", filterOption.remove);

            this.$(".dropdown-menu").append(filterOption.render().el);
            this.filterSelectorOptions[criterion.get("name")] = filterOption;
        },

        remove: function () {
            // remove selector items
            this.disposeSelectorOptions();
            Backbone.View.prototype.remove.call(this);
            return this;
        },

        disposeSelectorOptions: function () {
            this.trigger("dispose");
        },

        getFilterOption: function (criterionName) {
            return this.filterSelectorOptions[criterionName];
        }

    });

    return FilterSelector;
});