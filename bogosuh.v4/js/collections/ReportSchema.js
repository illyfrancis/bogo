/*global define*/
define([
    'underscore',
    'backbone',
    'models/ReportColumn'
], function (_, Backbone, ReportColumn) {

    /*

- What is JSON structure for report result?
    {
        accountNumber: '8110192', accountName: 'LOREM IPSUM DOLOR SIT AMET',
        clientRefID: 'ABDC-XYZT', transactionRefID: '39483028930000000000',
        transactionType: 'REC', transactionTypeDesc: 'RECEIVE FREE',
        securityID: 'G12345675', securityDesc: 'PERCIPIT MNESARCHUM EAM EA',
        securityIDType: 'CUSIP', location: 'US'
    }

    - If we assume the same ReportColumn's name is used in the JSON response (report),
        we can generate schema using the same name.

    - How should the report columns be persisted and hydrated? I think ReportSchema should be responsible for it (data API)
        define URL and call fetch & save etc.

    */

    var ReportSchema = Backbone.Collection.extend({

        model: ReportColumn,

        initialize: function () {
            this.MIN_REPORT_COLUMNS = 3;
            this.MAX_REPORT_COLUMNS = 10;
        },

        comparator: function (reportColumn) {
            // sort by position
            return reportColumn.get('position');
        },

        availableColumns: function () {
            return this.where({
                selected: false
            });
        },

        selectedColumns: function () {
            return this.where({
                selected: true
            });
        },

        hasMinReportColumns: function () {
            return this.selectedColumns().length <= this.MIN_REPORT_COLUMNS;
        },

        hasMaxReportColumns: function () {
            return this.selectedColumns().length >= this.MAX_REPORT_COLUMNS;
        },

        setDefaultSort: function () {
            var firstColumn = this.selectedColumns()[0],
                anySortApplied = this.any(function (reportColumn) {
                    return reportColumn.isSortApplied();
                });

            if (!anySortApplied && firstColumn) {
                firstColumn.reverseSort();
            }
        },

        hydrate: function (models) {
            // 1. first step is to 'unselect' everything without triggering any 'change' event
            // 2. use the models and 'update' the collection (this) - using 'set' method (which should trigger 'change' event)
        },

        preserve: function () {
            // should return stringified JSON of 'selected' ReportColumns with its state of 'position' & 'sort'
            // so it could look like this
            /*
                var selections = [
                    { name: 'accountName', position: 1, sort: 'desc' },
                    { name: 'clientRefId', position: 2, sort: '' },
                    ...
                ];

                return JSON.stringify(selections);
            */
        }

    });

    return ReportSchema;
});