define([
    'underscore',
    'backbone',
    'apps/EventBus',
    'apps/Repository',
    'text!templates/TransactionPaginator.html'
], function (_, Backbone, EventBus, Repository, tpl) {

    var TransactionPaginator = Backbone.View.extend({

        tagName: 'div',

        className: 'transaction-pagination',

        template: _.template(tpl),

        events: {
            'click li:not(".disabled") .prev': 'searchPrevious',
            'click li:not(".disabled") .next': 'searchNext'
        },

        initialize: function () {
            // collection = TransactionReport
            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function () {
            // console.log('> TransactionPaginator: render');
            var pager = this.collection.pager();
            this.$el.empty().html(this.template(pager));
            this.decoratePaginator(pager);

            return this;
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

    return TransactionPaginator;

});