define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    // ReportColumn must be associated with Criterion?
    var ReportColumn = Backbone.Model.extend({

        defaults: {
            title: '',  // for displaying - e.g. Account Name (full description)
            label: '',  // for report columns (short description)
            name: '',   // for rendering JSON response - e.g. accountName (should be unique, used as an id for persistence)
            selected: false,    // boolean test for including in report
            position: 0,    // column ordering within results
            criterion: '',  // name of Criterion object
            //filterable: true   // some columns may not be (or use criterion as an indication)
            sort: '' // 'asc' | 'desc' | ''
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
            // this.set('selected', !this.get('selected'));
            this.set('selected', !this.get('selected'), {
                validate: true
            });

            // if removed, also remove sorting for this column.
            if (!this.get('selected')) {
                this.set('sort', '');
            }
        },

        setPosition: function (position) {
            this.set('position', position, {
                silent: true
            });
        },

        reverseSort: function () {
            // reverse the sort order
            var order = this.isSortAsc() ? 'desc' : 'asc';
            this.set('sort', order);

            // remove sort order from the other columns
            // SMELL - accessing collection from model is strange.
            this.collection.each(function (reportColumn) {
                if (reportColumn !== this) {
                    reportColumn.set('sort', '');
                }
            }, this);
        },

        isSortAsc: function () {
            return this.get('sort') === 'asc';
        },

        isSortDesc: function () {
            return this.get('sort') === 'desc';
        },

        isSortApplied: function () {
            return this.get('sort') !== '' && this.get('selected');
        }

    });

    return ReportColumn;

    /*

    AccountNumber {
        title: 'Account Number',
        name: 'accountNumber',
        selected: true,
        position: 0,
        criterion: 'Account'
    }
    */
});