$(function() {


    var Item = Backbone.Model.extend({
        defaults: function() {
            return {
                title: "item",
                selected: false
            };
        },

        toggle: function() {
            this.selected = !this.selected;
        }
    });

    var ItemView = Backbone.View.extend({
        tagName: "li",

        template: _.template($("#item-template").html()),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    var AppView = Backbone.View.extend({

        el: $("#zetest"),

        render: function() {
            var item = new Item();
            var itemView = new ItemView({
                model: item
            });
            this.$el.find("ul").append(itemView.render().el);
            return this;
        }
    });

    var app = new AppView();
    app.render();
});