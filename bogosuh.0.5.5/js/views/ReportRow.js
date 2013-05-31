define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

    var ReportRow = Backbone.View.extend({

        tagName: 'tr',

        events: {
            'click': 'showDetail'
        },

        initialize: function (options) {
            // model = Transaction
            // pass in template for efficiency
            this.template = options.template;   // if template is already a _.template
            // this.template = _.template(options.template);    // if template is string
        },

        render: function () {
            try {
                this.$el.html(this.template(this.model.toFormattedJSON()));
            } catch (err) {
                this.$el.html('<td>Unable to display: ' + err.message + '</td>');
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