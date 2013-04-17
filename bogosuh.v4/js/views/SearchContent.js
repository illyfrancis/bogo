define([
    'jquery',
    'underscore',
    'backbone',
    'apps/Repository',    
    'collections/TransactionReport',
    'views/Progress',
    'views/SearchResult'
], function ($, _, Backbone, Repository, TransactionReport, Progress, SearchResult) {

    var SearchContent = Backbone.View.extend({

        tagName: 'div',

        className: 'search-content content-fluid',

        initialize: function (options) {
            // no model or collection
            this.reportSchema = options.reportSchema;
            this.searchCriteria = options.searchCriteria;

            this.progress = new Progress();
            this.$el.append(this.progress.el);
        },

        execute: function () {
            this.validate();
            this.showProgress();

            // fetch
            // this.report = new TransactionReport();
            this.report = Repository.transactionReport();

            // this.report.url = 'transactions.json';
            // this.report.fetch({
            //     success: _.bind(this.onSuccess, this),
            //     error: _.bind(this.onError, this)
            // });
            // this.report.reset(response.report.transactions);
            // simulate success by calling this.onSuccess
            this.onSuccess();
        },

        onSuccess: function (collection, response, options) {
            console.log('> SearchContent: onSuccess');
            this.hideProgress();
            this.renderReport();
        },

        onError: function (collection, xhr, options) {
            console.log('> SearchContent: onError');
            this.hideProgress();
            this.renderError();
        },

        validate: function () {
            console.log('> SearchContent: validate');
            // 1. need to validate that search can be done
            //    if not valid, return with message or fire error event?
        },

        showProgress: function () {
            // this.progress.show('Searching...');
        },

        hideProgress: function () {
            // this.progress.hide();
        },

        renderReport: function () {
            // temporary
            this.disposeSubViews();
            
            console.log('> SearchContent: renderReport');
            var searchResult = this.createSubView(SearchResult, {
                collection: this.report,
                reportSchema: this.reportSchema,
                searchCriteria: this.searchCriteria
            });
            this.$el.empty().append(searchResult.render().el);
        },

        renderError: function () {
            console.log('> SearchContent: renderError');
            // show alert?
        }

    });

    return SearchContent;

});