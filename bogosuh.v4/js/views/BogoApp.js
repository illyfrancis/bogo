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

            var query = this.searchCriteria.query();

            // this.queryByGet(query);
            this.queryByPost(query);

            this.searchContent.execute();
        },

        queryByGet: function (query) {
            var jsonstring = JSON.stringify(query);
            console.log('q: ' + jsonstring);

            var tx = new Backbone.Collection();
            // tx.url = '/api/transactions/search?q=' + jsonstring;
            tx.url = '/api/transactions/search';
            tx.fetch({
                data:{q:jsonstring}
            });
        },

        queryByPost: function (query) {
            var jsonstring = JSON.stringify(query);
            console.log('q: ' + jsonstring);

            var txSearch = new Backbone.Model(query);
            // tx.url = '/api/transactions/search?q=' + jsonstring;
            txSearch.urlRoot = '/api/transactions/search';
            txSearch.save();
            // on success -> map the list to a transaction collection.
        }

    });

    return BogoApp;

});