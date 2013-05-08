define([
    'underscore',
    'backbone',
    /*'scrollbar',*/
    'apps/EventBus',
    'apps/Repository',
    'views/ReportColumnHeader',
    'views/ReportRow',
    'text!templates/TransactionReport.html'
], function (_, Backbone, EventBus, Repository, ReportColumnHeader, ReportRow, tpl) {

    var TransactionReport = Backbone.View.extend({

        tagName: 'div',

        className: 'transaction-report',

        template: _.template(tpl),

        initialize: function (options) {
            // collection = TransactionReport
            this.reportSchema = options.reportSchema;
            this.searchCriteria = options.searchCriteria;

            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function () {
            console.log('> TransactionReport: render');

            this.disposeSubViews();
            var pager = this.collection.pager();
            this.$el.html(this.template(pager));
            this.renderColumnHeaders();
            this.renderReports();

            // add scrollbar - it's just too heavy!
            /*
            this.$('.report').mCustomScrollbar({
                // set_width: '90%',
                scrollInertia: 0,
                horizontalScroll: true,
                // theme: 'dark-thick'
                theme: 'dark-2',
                scrollButtons:{
                    enable: true
                }
            });
            */
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

                var align = reportColumn.get('align');
                if (align.indexOf('right') >= 0) {
                    cell = '<td><span class="pull-right"><%='+ reportColumn.get('name') +'%></span></td>';
                } else {
                    cell = '<td><%='+ reportColumn.get('name') +'%></td>';
                }
                template = template.concat(cell);
            });

            return template;
        }

    });

    return TransactionReport;

});