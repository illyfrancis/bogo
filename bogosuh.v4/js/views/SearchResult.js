define([
    'jquery',
    'underscore',
    'backbone',
    // 'scrollbar',
    'apps/EventBus',
    'views/ReportColumnHeader',
    'views/ReportRow',
    'text!templates/SearchResult.html'
], function ($, _, Backbone, EventBus, ReportColumnHeader, ReportRow, tpl) {

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

        events: {
            'click li:not(".disabled") .prev': 'searchPrevious',
            'click li:not(".disabled") .next': 'searchNext'
        },

        initialize: function (options) {
            // collection = TransactionReport
            this.reportSchema = options.reportSchema;
            this.searchCriteria = options.searchCriteria;

            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function () {

            console.log("> pager: " + JSON.stringify(this.collection._pager));

            this.disposeSubViews();
            // if report is empty
            //  this.renderNoReport();
            // else do the following.
            var pager = this.collection.pager();
            this.$el.html(this.template(pager));
            this.renderColumnHeaders();
            this.renderReports();
            this.decoratePaginator(pager);

            // add scrollbar - it's just too heavy!
/*            this.$('.report').mCustomScrollbar({
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
        },

        _reportRowTemplate: function () {
            var cell, template = '';
            _.each(this.reportSchema.selectedColumns(), function (reportColumn) {
                // cell = '<td class="text-right"><%= ' + reportColumn.get('name') + ' %></td>';
                // cell = '<td><%= ' + reportColumn.get('name') + ' %></td>';
                // cell = '<td><p class="text-right"><%= ' + reportColumn.get('name') + ' %></p></td>';
                cell = '<td><span class="pull-right"><%= ' + reportColumn.get('name') + ' %></span></td>';
                template = template.concat(cell);
            });

            return template;
        },

        decoratePaginator: function (pager) {
            if (pager.current === 1) {
                this.$('.prev').parent('li').addClass('disabled');
            }

            if (pager.current === pager.total) {
                this.$('.next').parent('li').addClass('disabled');
            }
        },

        searchPrevious: function () {
            EventBus.trigger('searchPrevious');
        },

        searchNext: function () {
            EventBus.trigger('searchNext');
        }

    });

    return SearchResult;

});