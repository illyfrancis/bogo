define([
    'jquery',
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'collections/SearchCriteria',
    'views/ViewFactory'
], function ($, _, Backbone, EventBus, Repository, SearchCriteria, ViewFactory) {

    var Query = Backbone.Model.extend({

        defaults: {
            criteria: "",
            fields: "",
            sort: ""
        },

        searchUrl: '/api/transactions/search?limit={{limit}}&offset={{offset}}',

        // paging: {
        //     limit: 10,
        //     offset: 0
        // },

        limit: 10,
        offset: 0,

        initialize: function (options) {
            // _.defaults(options, {
            //     limit: 10,
            //     offset: 0
            // });
            // specify the callback when query is initialized
            // options.callback
            // then in execute, set up save with callback.
        },

        // urlRoot: '/api/transactions/search',
        // urlRoot: '/api/transactions/search?limit=2&offset=1',
        urlRoot: function () {
            return this.searchUrl.replace('{{limit}}', this.limit).replace('{{offset}}', this.offset);
        },

        execute: function (page) {
            if (!_.isUndefined(page)) {
                this.offset = page;
            }
            // call save() which in turn invoke 'post'
            this.save();
        }
    });

    var BogoApp = Backbone.View.extend({

        el: 'body',

        initialize: function () {
            this.listenTo(EventBus, 'showReportSettings', this.showReportSettings);
            this.listenTo(EventBus, 'showFilters', this.showFilters);
            this.listenTo(EventBus, 'startSearch', this.doSearch);

            this.searchCriteria = Repository.searchCriteria();
        },

        load: function () {
            Repository.loadAll(this.render, this);
        },

        render: function () {
            var reportSchema = Repository.reportSchema();

            // create views
            this.appMenu = ViewFactory.createAppMenu(this.searchCriteria);
            this.reportSettings = ViewFactory.createReportSettings(reportSchema);
            this.filterStatusBar = ViewFactory.createFilterStatusBar(this.searchCriteria);
            this.searchFilters = ViewFactory.createSearchFilters(this.searchCriteria);
            this.searchContent = ViewFactory.createSearchContent(reportSchema, this.searchCriteria);

            console.log('BogoApp:render');
            this.$el.append(this.appMenu.render().el);
            this.$el.append(this.filterStatusBar.render().el);
            this.$el.append(this.reportSettings.render().el);
            this.$el.append(this.searchFilters.render().el);
            this.$el.append(this.searchContent.el); // nothing to render
        },

        showFilters: function (criterionName) {
            this.searchFilters.show(criterionName);
        },

        showReportSettings: function () {
            this.reportSettings.show();
        },

        doSearch: function () {
            console.log('doSearch');

            var reportSchema = Repository.reportSchema();
            var fields = reportSchema.queryFields();
            var sort = reportSchema.querySort();
            var criteria = this.searchCriteria.queryCriteria();

            var query = new Query();
            query.set('criteria', JSON.stringify(criteria));
            query.set('fields', JSON.stringify(fields));
            query.set('sort', JSON.stringify(sort));
            query.set('limit', 2);
            // query.set('offset', 1);

            query.execute(1);

            this.searchContent.execute();
        }

    });

    return BogoApp;

});