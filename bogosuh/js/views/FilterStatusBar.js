var app = app || {};
app.views = app.views || {};

app.views.FilterStatusBar = Backbone.View.extend({

    tagName: "div",

    className: "filter-bar",

    template: _.template($("#tpl-report-filter-status-bar").html()),

    events: {
        "click .add-filters": "showFilters"
    },

    initialize: function() {
        // collection = SearchCriteria
        this.collection.on("change:isApplied", this.updateView, this);
    },

    updateView: function(reportCriteria) {
        // only do partial update
        if(reportCriteria.get("isApplied")) {
            this.addFilterBadge(reportCriteria);
        }
    },

    showFilters: function() {
        app.EventBus.trigger("showFilters");
    },

    render: function() {
        this.$el.empty();
        this.$el.html(this.template());
        this.renderFilterBadges();
        return this;
    },

    renderFilterBadges: function() {
        var filtersApplied = this.collection.where({
            isApplied: true
        });
        _.each(filtersApplied, this.addFilterBadge, this);
    },

    addFilterBadge: function(filter) {
        // TODO - dispose views properly
        var filterBadge = new app.views.FilterStatusBadge({
            model: filter
        });
        this.$el.prepend(filterBadge.render().el);
    }

});