var Item = Backbone.Model.extend({
});

var Items = Backbone.Collection.extend({
  model: Item
});

var ListView = Backbone.View.extend({
  className: 'list',
  tagName: 'ul',
  initialize: function() {
    // this.collection.on('reset', this.addAll, this);
    this.listenTo(this.collection, 'reset', this.addAll); // #2
  },

  addOne: function (item) {
    var view = new ItemView({model: item});
    // view.listenTo(this, 'clean_up', view.remove); // #3
    this.$el.append(view.render().el);
  },

  removeItemViews: function () {
    this.trigger('clean_up');
  },

  addAll: function () {
    // this.$el.empty();
    this.removeItemViews(); // #3
    this.collection.each(this.addOne, this);
  },

  render: function () {
    this.addAll();
    return this;
  },

  remove: function () {
    this.removeItemViews();
    return Backbone.View.prototype.remove.call(this);
  }
});

var ItemView = Backbone.View.extend({
  className: 'item',
  tagName: 'li',
  events: {
    'click .foo' : 'close'
    // 'click' : 'remove'
    // 'click' : 'close'
  },
  initialize: function () {
    // this.model.on('change:name', this.updateName, this);
    // this.listenTo(this.model, 'change:name', this.updateName);
    this.listenTo(this, 'close', this.remove);
  },
  updateName: function () {
    console.log('updateName');
    this.$el.html(this.model.get('name') + "<a href='#'>yo</a>");
  },
  render: function () {
    this.$el.html(this.model.get('name') + "<a class='foo' href='#'>yo</a>");
    // this.$el.html(this.model.get('name'));
    return this;
  },
  close: function () {
    this.trigger('close');
  },
  remove: function () {
    // this.$el.empty();
    // this.off();
    // this.undelegateEvents();
    // this.$el.off('.delegateEvents' + this.cid, '.foo');
    Backbone.View.prototype.remove.call(this);
    // delete this.$el;
    // delete this.el;
    return this;
  }

});

$(function () {

  var collection = new Items([{
    name: "Item #1"
  }, {
    name: "Item #2"
  }, {
    name: "Item #3"
  }, {
    name: "Item #4"
  }, {
    name: "Item #5"
  }]);

  var listView = new ListView({collection: collection});
  $('body').append(listView.render().el);

  $('#teardown').on('click', function() {
    if (listView) {
      listView.remove();
      listView = null;
    }
  });

  $('#rename').on('click', function() {
    collection.each(function (item) {
      item.set('name', new Date().getTime());
    });
  });
});