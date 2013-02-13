var MyModel = Backbone.Model.extend({
    defaults: {
        date: "1/1/2001"
    }
});

var MyView = Backbone.View.extend({

    template: _.template($("#item-template").html()),

    initialize: function() {
        var defaultDate = this.model.get("date");
        // set the date with model
//        this.$el.val(defaultDate);
        // console.log("init with " + defaultDate);
    },
    events: {
        "change .datepicker": "updateModel",
    },
    updateModel: function() {
        console.log("date changed x");
    },
    render: function() {
        this.$el.html(this.template({}));
        this.$el.find("input").datepicker();
        return this;
    }
});

$(function() {
    var model = new MyModel();
    var view = new MyView({model: model});
//    view.render();
//    $("body").append(view.el);
//   or...
    view.render().$el.appendTo("body");
});