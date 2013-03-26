/*global define*/
define(["backbone"], function (Backbone) {

    var SearchCriterion = Backbone.Model.extend({

        defaults: {
            name: "",
            isApplied: false,
            restrictions: {}
        },

        initialize: function () {
            // this.hydrate(this.attributes.restrictions);
        },

        hydrate: function (json) {
            // noop
            console.log("hydrate", JSON.stringify(json));
        }

    });

    var AccountCriterion = SearchCriterion.extend({
        hydrate: function (json) {

        }
    });

    // SearchCriteria = Collection of SearchCriterion

    var ReferenceRepository = {
        loadAll: function (callback) {
            // load all
            this.loadAccounts();
            callback();
        },
        loadAccounts: function () {
            this.accounts = new Backbone.Collection();
        },
        getAccounts: function () {
            return this.accounts;
        }
    };

    var App = Backbone.View.extend({

        load: function () {
            ReferenceRepository.loadAll(this.render);
        },

        render: function () {
            // create SearchFilters and append
            var searchFilters = new SearchFilters(this.searchCriteria);
            this.$el.append(searchFilters.render().el);
        }
    });

    var SearchFilters = Backbone.View.extend({
        // collection = SearchCriteria
    });

    var AccountFilter = Backbone.View.extend({
        // model = AccountCriterion
    });

    var SearchFilterSelector = Backbone.View.extend({
        // model = AccountCriterion
    });

});