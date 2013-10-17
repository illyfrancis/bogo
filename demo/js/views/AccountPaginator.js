define(['jquery',
    'underscore',
    'backbone',
    'text!templates/AccountPaginator.html'
], function ($, _, Backbone, tpl) {

    var AccountPaginator = Backbone.View.extend({

        template: _.template(tpl),

        initialize: function () {
            this.listenTo(this.collection, 'reset', this.render);
        },

        events: {
            'click li:not(".disabled") .prev': 'gotoPrevious',
            'click li:not(".disabled") .next': 'gotoNext',
            'click li:not(".disabled") .first': 'gotoFirst',
            'click li:not(".disabled") .last': 'gotoLast',
            'change .pageNumber': 'gotoPage'
        },

        gotoPrevious: function () {
            this.collection.previousPage();
        },

        gotoNext: function () {
            this.collection.nextPage();
        },

        gotoFirst: function () {
            this.collection.goTo(1);
        },

        gotoLast: function () {
            var info = this.collection.information;
            this.collection.goTo(info.lastPage);
        },

        gotoPage: function (e) {
            var page = $(e.target).val();
            this.collection.goTo(page);
        },

        render: function () {
            var info = this.collection.info();
            this.$el.empty();
            this.$el.html(this.template(info));
            this.decoratePaginator(info);
            return this;
        },

        decoratePaginator: function (info) {
            if (info.previous === false) {
                this.$('.first, .prev').each(function (i, el) {
                    $(el).parent('li').addClass('disabled');
                });
            }

            if (info.next === false) {
                this.$('.next, .last').each(function (i, el) {
                    $(el).parent('li').addClass('disabled');
                });
            }
        }
    });

    return AccountPaginator;
});