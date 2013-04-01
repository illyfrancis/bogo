define([
    'jquery',
    'underscore',
    'backbone',
    'views/FilterSelectorOption',
    'text!templates/FilterSelector.html'
], function ($, _, Backbone, FilterSelectorOption, tpl) {

    var FilterSelector = Backbone.View.extend({
        
        className: 'filter-select',

        template: _.template(tpl),

        // TODO - might need evetns: to handle 'select' for updating label on the selector.
        events: {
            'select': 'updateFilterLabel'
        },

        initialize: function () {
            // collection = SearchCriteria
            this.filterSelectorOptions = {};
        },

        render: function (criterionCid) {
            this.disposeSelectorOptions();
            this.$el.empty();
            this.$el.html(this.template());

            this.collection.each(this.appendFilterOption, this);
            this.updateFilterLabel({}, criterionCid);

            return this;
        },

        appendFilterOption: function (criterion) {
            var filterOption = new FilterSelectorOption({
                model: criterion
            });

            filterOption.listenTo(this, 'dispose', filterOption.remove);

            this.$('.dropdown-menu').append(filterOption.render().el);
            this.filterSelectorOptions[criterion.get('name')] = filterOption;
        },

        remove: function () {
            // remove selector items
            this.disposeSelectorOptions();
            Backbone.View.prototype.remove.call(this);
            return this;
        },

        disposeSelectorOptions: function () {
            this.trigger('dispose');
        },

        selectByName: function (criterionName) {
            var filterOption = this.filterSelectorOptions[criterionName];
            if (filterOption) {
                filterOption.select();
            }
        },

        updateFilterLabel: function (e, criterionCid) {
            var criterion = this.collection.get(criterionCid);
            this.$('.filter-name').text(criterion.get('title'));
        }

    });

    return FilterSelector;
});