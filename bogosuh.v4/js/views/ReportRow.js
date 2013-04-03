define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

    var ReportRow = Backbone.View.extend({

        tagName: 'tr',

        events: {
            'click': 'showDetail'
        },

        initialize: function (options) {
            // model = ReportItem
            // pass in template for efficiency
            this.template = options.template;
        },

        render: function () {
            try {
                this.$el.html(this.template(this.model.toJSON()));
            } catch(err) {
                this.$el.html('unable to render: ' + err.message);
                console.log(err.message);
            }
            return this;
        },

        showDetail: function () {
            alert('show detail : ' + this.template(this.model.toJSON()));
            // Q: what is the id for transaction detail? it should always be fetched?
            // fetch full model xxx
            // new ReportDetail({model: xxx})
        }

    });

    return ReportRow;
});