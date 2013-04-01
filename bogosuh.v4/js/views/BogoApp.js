define([
    'jquery',
    'underscore',
    'backbone',
    'events/EventBus',
    'collections/ReportSchema',
    'collections/SearchCriteria',
    'views/ViewManager'
], function ($, _, Backbone, EventBus, ReportSchema, SearchCriteria, ViewManager) {

    var BogoApp = Backbone.View.extend({

        el: 'body',

        initialize: function () {
            EventBus.on('showReportSettings', this.showReportSettings, this);
            EventBus.on('showFilters', this.showFilters, this);
            EventBus.on('startSearch', this.doSearch, this);

            this.latch = 2;
            this.once('load:reportSchema', this.countDown, this);
            this.once('load:searchCriteria', this.countDown, this);
        },

        load: function () {
            this.loadReportSchema();
            this.loadSearchCriteria();
        },

        countDown: function () {
            this.latch = this.latch - 1;
            if (this.latch === 0) {
                this.render();
            }
        },

        loadReportSchema: function () {
            var self = this;
            this.reportSchema = new ReportSchema();
            this.reportSchema.url = '/api/reportschema';
            this.reportSchema.fetch({
                success: function () {
                    // need to assume that the position is already determined - but let's just do that here for now.
                    var position = 0;
                    self.reportSchema.each(function (reportColumn) {
                        // reportColumn.set('position', ++position);
                        reportColumn.set('position', ++position, {silent: true});   // this is now possible because we force the load of report schema.
                    });

                    self.trigger('load:reportSchema');
                },
                error: function () {
                    // TODO - error handling
                    console.log('Error fetch reportschema');
                }
            });
            // this.reportSchema.reset(response.reportSchema.values);
        },

        loadSearchCriteria: function () {
            this.searchCriteria = new SearchCriteria();
            /*
            this.searchCriteria.reset([{
                name: 'AccountCriteria',
                title: 'Account',
                isApplied: true,
                restrictions: {
                    accountNumbers: ['0015594','0067173','0067249']
                }
            }, {
                name: 'TransactionTypeCriteria',
                title: 'Transaction Types',
                isApplied: false,
                restrictions: {
                    types: ['DVW','RVP','REC'],
                    id: 'TR001'
                }
            }, {
                name: 'SecurityIdCriteria',
                title: 'Security ID',
                isApplied: false,
                restrictions: {
                }
            }, {
                name: 'SecurityCategoryCriteria',
                title: 'Security Category',
                isApplied: false,
                restrictions: {
                }
            }, {
                name: 'SettlementDateCriteria',
                title: 'Settlement Date',
                isApplied: false,
                restrictions: {
                }
            }, {
                name: 'SettlementLocationCriteria',
                title: 'Settlement Location',
                isApplied: false,
                restrictions: {
                }
            }], {
                parse: true
            }); // for forcing the parse in the model
*/

            this.trigger('load:searchCriteria');
        },

        render: function () {
            // create views
            this.appMenu = ViewManager.appMenu(this.searchCriteria);
            this.reportSettings = ViewManager.reportSettings(this.reportSchema);
            this.filterStatusBar = ViewManager.filterStatusBar(this.searchCriteria);
            this.searchFilters = ViewManager.searchFilters(this.searchCriteria);
            this.searchContent = ViewManager.searchContent(this.reportSchema, this.searchCriteria);

            console.log('BogoApp:render');
            this.$el.append(this.appMenu.render().el);
            this.$el.append(this.filterStatusBar.render().el);
            this.$el.append(this.searchContent.el); // nothing to render
            this.$el.append(this.reportSettings.render().el);
            this.$el.append(this.searchFilters.render().el); // - already rendered in initilize of searchfilters
        },

        doSearch: function () {
            console.log('doSearch');
            this.searchContent.execute();
        },

        showFilters: function (e) {
            this.searchFilters.show(e);
        },

        showReportSettings: function () {
            this.reportSettings.show();
        }
    });

    return BogoApp;

});