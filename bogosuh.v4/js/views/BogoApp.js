define([
    'jquery',
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'collections/SearchCriteria',
    'views/ViewFactory'
], function ($, _, Backbone, EventBus, Repository, SearchCriteria, ViewFactory) {

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

            console.log("fields : " + JSON.stringify(fields));
            console.log("sort : " + JSON.stringify(sort));

            var criteria = this.searchCriteria.query();
            // var query = {
            //     criteria: criteria
            // };
            var query = {};
            query['criteria'] = JSON.stringify(criteria);
            query['fields'] = JSON.stringify(fields);
            query['sort'] = JSON.stringify(sort);

            // this.queryByGet(query);
            this.queryByPost(query);

            this.searchContent.execute();
        },

        queryByPost: function (query) {
            var jsonstring = JSON.stringify(query);
            console.log('q: ' + jsonstring);

            var txSearch = new Backbone.Model(query);
            // txSearch.set("criteria", JSON.stringify(query.criteria));
            // tx.url = '/api/transactions/search?q=' + jsonstring;
            txSearch.urlRoot = '/api/transactions/search?p=stuff';
            txSearch.save();
            // on success -> map the list to a transaction collection.
        }
    });

    return BogoApp;

});