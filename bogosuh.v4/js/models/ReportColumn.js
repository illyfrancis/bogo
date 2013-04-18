define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var ReportColumn = Backbone.Model.extend({

        defaults: {
            name: '',   // for rendering JSON response - e.g. accountName (should be unique, used as an id for persistence)
            label: '',  // for report columns (short description)
            title: '',  // for displaying - e.g. Account Name (full description)
            selected: false,    // boolean test for including in report
            position: 0,    // column ordering within results
            criterion: '',  // name of Criterion object
            //filterable: true   // some columns may not be (or use criterion as an indication)
            sort: 0 // 1 for asc, -1 for desc
        },

        idAttribute: '_id',

        validate: function (attrs) {

            // validate only if ReportColumn is being selected
            // (but if the value isn't changed i.e. already selected don't bother)
            // validate based on collection (ReportSchema) property.
            // be careful, the collection attrib for this model is the first collection that this model is bound to.
            // e.g. if the model is added to a second collection the this.collection refers to the first collection obj only.
            if (this._isColumnBeingAdded(attrs) && this.collection.hasMaxReportColumns()) {
                return 'Cannot add more report columns';
            }

            if (this._isColumnBeingRemoved(attrs) && this.collection.hasMinReportColumns()) {
                return 'Cannot remove more report columns';
            }
        },

        _isColumnBeingAdded: function (attrs) {
            return attrs.selected && !this.previousAttributes().selected;
        },

        _isColumnBeingRemoved: function (attrs) {
            return !attrs.selected && this.previousAttributes().selected;
        },

        toggle: function () {
            var isSelected = this.attributes.selected,
                sort = isSelected ? 0 : this.attributes.sort;

            this.set({selected: !isSelected, sort: sort}, {validate: true});
        },

        setPosition: function (position) {
            this.set('position', position, {silent: true});
        },

        reverseSort: function () {
            // reverse the sort order (if 0 then set it to 1)
            var order = this.get('sort');
            order = (order === 0) ? order = 1 : order * -1;
            this.set('sort', order);

            // remove sort order from the other columns
            // SMELL - accessing collection from model is strange.
            this.collection.each(function (reportColumn) {
                if (reportColumn !== this) {
                    reportColumn.set('sort', 0);
                }
            }, this);
        },

        isSortAsc: function () {
            return this.get('sort') === 1;
        },

        isSortDesc: function () {
            return this.get('sort') === -1;
        },

        isSortApplied: function () {
            return this.get('sort') !== 0 && this.get('selected');
        },

        clearAll: function () {
            this.set({
                selected: false,
                position: 0
            }, {
                silent:true
            });
        }

    });

    return ReportColumn;

});