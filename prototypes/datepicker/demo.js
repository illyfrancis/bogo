var MyModel = Backbone.Model.extend({
    defaults: {
        date: "1/1/2001"
    },
    validate: function(attrs) {
        if (!attrs.date) {
            return "date must be specified";
        }
    }
});

var MyView = Backbone.View.extend({
    el: "#datepicker",
    initialize: function() {
        var defaultDate = this.model.get("date");
        // set the date with model
        this.$el.val(defaultDate);
        console.log("init with " + defaultDate);
        this.model.on("error", this.handleError);
    },
    events: {
        "change": "updateModel"
        // ,
        // "blur": "updateModel"
    },
    handleError: function(model, error) {
        alert(error);
    },
    updateModel: function(event) {
        var oldDate = this.model.get("date");
        console.log("date changed : " + oldDate);

        var selectedDate = this.$el.val();

        console.log("new date : " + selectedDate);

        this.model.set("date", selectedDate);
    },
    render: function() {
        this.$el.datepicker();
        return this;
    }
});

$(function() {
    var model = new MyModel();
    var view = new MyView({model: model});
    view.render();
});