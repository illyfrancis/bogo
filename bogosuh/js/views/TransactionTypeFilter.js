var app = app || {};
app.views = app.views || {};

app.views.TransactionTypeFilter = Backbone.View.extend({

	initialize: function() {
		// model = ReportCriteria (TransactionTypeCriteria)

        app.data.transactionTypes.on("childChange", this.filterChanged, this);

        this.transactionTypes = new app.views.Tree({
        	collection: app.data.transactionTypes
        });

        this.$el.append(this.transactionTypes.render().el);
        this.transactionTypes.refresh(); // this many need to be fired after render.
        
	},

    filterChanged: function() {
        // decide if filter value change should be tracked by SearchFilter, if so trigger "filter change" event.
        if (this.model.get("isApplied")) {
            if (!app.data.transactionTypes.hasSelection()) {
                app.EventBus.trigger("filter:remove");
            } else {
                app.EventBus.trigger("filter:change");
            }
        }
    },

	render: function() {
        // this.transactionTypes.refresh(); // this many need to be fired after render.
        return this;
	}

});