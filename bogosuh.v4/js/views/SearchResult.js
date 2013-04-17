define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'views/ReportColumnHeader',
    'views/ReportRow',
    'text!templates/SearchResult.html'
], function ($, _, Backbone, Bootstrap, ReportColumnHeader, ReportRow, tpl) {

    /*
    // for search result display
    <div class='nav-bar'></div>
    <div class='filter-bar'></div>
    <div class='search-content content-fluid'>
        <div class='modal hide'>spinner...</div>
        <div class='search-result'>
            <div class='report-header'></div>
            <div class='report-body'></div>
            <div class='report-footer'></div>
        </div>
    </div>

        or

    <div class='nav-bar'></div>
    <div class='filter-bar'></div>
    <div class='search-content content-fluid'>
        <div class='modal hide'>spinner...</div>
        <div class='search-result'>
            <table>
                <thead class='report-header'>
                </thead>
                <tbody class='report-body'>
                </tbody>
            </table>
            <div class='report-footer'>
            </div>
        </div>
    </div>

    and no scrollbar
    */

    var SearchResult = Backbone.View.extend({

        tagName: 'div',

        className: 'search-result',

        template: _.template(tpl),

        initialize: function (options) {
            // collection = TransactionReport
            this.reportSchema = options.reportSchema;
            this.searchCriteria = options.searchCriteria;

            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function () {
            this.disposeSubViews();
            // if report is empty
            //  this.renderNoReport();
            // else do the following.
            this.$el.html(this.template());
            this.renderColumnHeaders();
            this.renderReports();
            return this;
        },

        renderColumnHeaders: function () {
            _.each(this.reportSchema.selectedColumns(), this.appendColumnHeader, this);
        },

        appendColumnHeader: function (reportColumn) {
            var columnHeader = this.createSubView(ReportColumnHeader, {
                model: reportColumn,
                searchCriteria: this.searchCriteria
            });

            this.$('.report-header tr').append(columnHeader.render().el);
        },

        renderReports: function () {
            // prepare the row template
            this.rowTemplate = _.template(this.reportRowTemplate());

            this.collection.each(this.appendReportRow, this);
        },

        appendReportRow: function (reportItem) {
            var row = this.createSubView(ReportRow, {
                model: reportItem,
                template: this.rowTemplate
            });

            this.$('.report-body').append(row.render().el);
        },

        reportRowTemplate: function () {
            var cell, template = '';
            _.each(this.reportSchema.selectedColumns(), function (reportColumn) {
                cell = '<td><%= ' + reportColumn.get('name') + ' %></td>';
                template = template.concat(cell);
            });

            return template;
        }

    });

    return SearchResult;

});