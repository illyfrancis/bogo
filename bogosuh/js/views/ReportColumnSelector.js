var app = app || {};
app.views = app.views || {};

app.views.ReportColumnSelector = Backbone.View.extend({

	template: _.template($("#tpl-report-column-selector").html()),

	events: {
		"click .move-up": "moveUp",
		"click .move-down": "moveDown",
		"click .add-columns": "addColumns",
		"click .remove-columns": "removeColumns",
		"dblclick select": "toggle",
		"click .reset-columns": "foo"
	},

	initialize: function() {
		// collection = ReportSchema
		this.collection.on("change", this.render, this);
		this.collection.on("error", this.onValidationError, this);

		this.$el.html(this.template());
		this.$available = this.$el.find(".report-column-available");
		this.$selected = this.$el.find(".report-column-selected");
	},

	render: function() {
		// should render separate list (selected vs available)
		this.$available.empty();
		_.each(this.collection.availableColumns(),
			this.appendReportColumnItem, this.$available);

		this.$selected.empty();
		_.each(this.collection.selectedColumns(),
			this.appendReportColumnItem, this.$selected);

		return this;
	},

	appendReportColumnItem: function(reportColumn) {
		// TODO - proper disposal of itemviews
		var itemView = new app.views.ReportColumnItem({
			model: reportColumn
		});
		this.append(itemView.render().el);
	},

	onValidationError: function(model, error) {
		alert(error);
		this.validationMaxReached = true; // TODO - hack to indicate max reached.
	},

	moveUp: function() {
		var $selections = this.$selected.find(":selected");
		this._move($selections.first(), $selections, $().prev, $().before);
	},

	moveDown: function() {
		var $selections = this.$selected.find(":selected");
		this._move($selections.last(), _.toArray($selections).reverse(), $().next, $().after);
	},

	_move: function($edgeSelection, $selections, target, place) {
		var $border = target.apply($edgeSelection);
		if ($border.length > 0) {
			_.each($selections, function(item) {
				this._swapPositions(item, target, place);
			}, this);

			// update the order in the collection
			this.collection.sort({silent:true});
			this._focusSelection($selections);
		}
	},

	_swapPositions: function(item, target, place) {
		var $target = target.apply($(item));	// == $(item).prev() or $(item).next();
		var currModel = this.collection.getByCid(item.value);
		var targetModel = this.collection.getByCid($target.val());
		var currPosition = currModel.get("position");
		currModel.setPosition(targetModel.get("position"));
		targetModel.setPosition(currPosition);

		// update view
		place.apply($target, [item]); // == $(item).prev().before(item) or $(item).next().after(item);
	},

	_focusSelection: function($selections) {
		// hack - by resetting the selectedIndex in the dom, it displays current selection in view.
		var s = this.$selected.get(0);
		s.selectedIndex = s.selectedIndex;
		_.each($selections, function(item) {
			$(item).prop("selected", "selected");
		});
	},

	addColumns: function() {
		this._toggleColumns(this.$available.val());
	},

	removeColumns: function() {
		this._toggleColumns(this.$selected.val());
	},

	_toggleColumns: function(selections) {
		if(selections) {
			_.each(selections, function(cid) {
				if (!this.validationMaxReached) {
					this.collection.getByCid(cid).toggle();
				}
			}, this);
			this.validationMaxReached = false;
		}
	},

	// workaround for IE not targeting dblclick on <option> items
	// TODO - keep the handler in the option or remove it and just use this one instead?
	toggle: function(e) {
		this._toggleColumns([e.target.value]);
	},

	foo: function() {
		alert("Not implemented yet");

		console.log(JSON.stringify(this.collection.reportTemplate()));
	}

});