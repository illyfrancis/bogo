define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    // 'use strict';
    var ReportColumn = Backbone.Model.extend({

        defaults: {
            name: '',       // for rendering JSON response - e.g. accountName (should be unique, used as an id for persistence)
            label: '',      // for report columns (short description)
            title: '',      // for displaying - e.g. Account Name (full description)
            selected: false,// boolean test for including in report
            position: 0,    // column ordering within results
            criterion: '',  // name of Criterion object
            sort: 0,        // 1 for asc, -1 for desc
            align: ''       // '' implies left or 'left', 'right' for align right.
        },

        idAttribute: '_id',

        validate: function (attributes) {

            // column being added and already reached max
            if (this.collection.hasMaxReportColumns() &&
                attributes.selected && !this.previousAttributes().selected) {
                return 'Cannot add more report columns';
            }

            // column being removed and reached min
            if (this.collection.hasMinReportColumns() &&
                !attributes.selected && this.previousAttributes().selected) {
                return 'Cannot remove more report columns';
            }
        },

        // toggle selection
        toggle: function () {
            var isSelected = this.attributes.selected,
                sort = isSelected ? 0 : this.attributes.sort;

            this.set({selected: !isSelected, sort: sort}, {validate: true});
        },

        reverseSort: function () {
            // reverse the sort order (if 0 then set it to 1)
            var order = this.get('sort');
            order = (order === 0) ? order = 1 : order * -1;
            this.set('sort', order);

            // remove sort order from the other columns
            this.collection.each(function (reportColumn) {
                if (reportColumn !== this) {
                    reportColumn.set('sort', 0);
                }
            }, this);
        },

        isSortAsc: function () {
            return this.attributes.sort === 1;
        },

        isSortDesc: function () {
            return this.attributes.sort === -1;
        },

        isSortApplied: function () {
            return this.attributes.selected && (this.isSortAsc() || this.isSortDesc());
        },

        setPosition: function (position) {
            this.set({position: position}, {silent: true});
        },

        clearSelection: function () {
            this.set({selected: false, position: 0}, {silent:true});
        }

    });

    return ReportColumn;

});