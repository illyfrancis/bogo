define(["jquery", "underscore", "backbone", "text!templates/AccountPaginator.html"], function ($, _, Backbone, tpl) {

    var AccountPaginator = Backbone.View.extend({

        template: _.template(tpl),

        initialize: function () {
            this.collection.on("reset", this.render, this);
            this.collection.on("change", function () {
                console.log("pagi : change");
            });
            this.collection.on("add", function () {
                console.log("pagi : add");
            });
        },

        events: {
            "click li:not('.disabled') .prev": "gotoPrevious",
            "click li:not('.disabled') .next": "gotoNext",
            "click li:not('.disabled') .first": "gotoFirst",
            "click li:not('.disabled') .last": "gotoLast",
            "click li .current": "foo",
            "change .pageNumber": "gotoPage"
        },

        foo: function (e) {
        },

        gotoPrevious: function () {
            this.collection.previousPage();
        },

        gotoNext: function () {
            this.collection.nextPage();
        },

        gotoFirst: function () {
            // TODO must check if there are any records to show at all!
            this.collection.goTo(1);
        },

        gotoLast: function () {
            // TODO must check if there are any records to show at all!
            var info = this.collection.info();
            this.collection.goTo(info.lastPage);
        },

        gotoPage: function (e) {
            var page = $(e.target).val();
            this.collection.goTo(page);
        },

        render: function () {
            this.$el.empty(); // needed?
            this.$el.html(this.template(this.collection.info()));
            this.decoratePaginator();
            return this;
        },

        decoratePaginator: function () {
            var info = this.collection.info();
            if(info.previous === false) {
                this.$el.find(".first, .prev").each(function (i, el) {
                    $(el).parent("li").addClass("disabled");
                });
            }

            if(info.next === false) {
                this.$el.find(".next, .last").each(function (i, el) {
                    $(el).parent("li").addClass("disabled");
                });
            }
        }
    });

    return AccountPaginator;
});