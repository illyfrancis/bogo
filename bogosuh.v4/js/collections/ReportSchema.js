/*global define*/
define([
    'underscore',
    'backbone',
    'models/ReportColumn'
], function (_, Backbone, ReportColumn) {

    var ReportSchema = Backbone.Collection.extend({

        model: ReportColumn,

        initialize: function () {
            this.MIN_REPORT_COLUMNS = 3;
            this.MAX_REPORT_COLUMNS = 15;
        },

        comparator: function (reportColumn) {
            // sort by position
            return reportColumn.get('position');
        },

        availableColumns: function () {
            return this.where({selected: false});
        },

        selectedColumns: function () {
            return this.where({selected: true});
        },

        hasMinReportColumns: function () {
            return this.selectedColumns().length <= this.MIN_REPORT_COLUMNS;
        },

        hasMaxReportColumns: function () {
            return this.selectedColumns().length >= this.MAX_REPORT_COLUMNS;
        },

        setDefaultSort: function () {
            var anySortApplied = this.any(function (reportColumn) {
                    return reportColumn.isSortApplied();
                });

            if (!anySortApplied) {
                var firstColumn = _.first(this.selectedColumns());
                if (firstColumn) {
                    firstColumn.set('sort', 1); // asc
                }
            }
        },

        hydrate: function (selections) {
            // 1. first step is to 'unselect' everything without triggering any 'change' event
            // 2. use the models and 'update' the collection (this) - using 'set' method (which should trigger 'change' event)

            this.invoke('clearSelection');

            // not the most efficient: O(n^2)
            _.each(selections, function (item) {
                var reportColumn = this.findWhere({'name': item.name});
                if (reportColumn) {
                    reportColumn.set({
                        selected: true,
                        position: item.position,
                        sort: item.sort
                    }, {
                        silent: true
                    });
                }
            }, this);

            // need to sort itself
            this.sort();
            this.trigger('change');
        },

        preserve: function () {
            var schema = [];
            this.selectedColumns();
            _.each(this.selectedColumns(), function (reportColumn) {
                schema.push({
                    name: reportColumn.get('name'),
                    position: reportColumn.get('position'),
                    sort: reportColumn.get('sort')
                });
            });

            return schema;
        },

        queryFields: function () {
            var fields = [],
                position = 0;
            this.each(function (column) {
                if (column.get('selected')) {
                    fields.push(column.get('name'));
                    column.set('position', ++position, {silent: true}); // TODO - DRY it
                }
            });

            return JSON.stringify(fields);
        },

        querySort: function () {
            this.setDefaultSort();
            var sortColumn = this.find(function (column) {
                var sort = column.get('sort');
                return sort !== 0;
            });

            var sortField = {};
            if (sortColumn) {
                sortField[sortColumn.get('name')] = sortColumn.get('sort');
            }

            return JSON.stringify(sortField);
        }

    });

    return ReportSchema;
});