// Model
// ------------------

var Model = Backbone.Model.extend({

  defaults: {
    text: 'Zombie'
  }

});

// View
// ------------------

var ItemView = Backbone.View.extend({
  
  tagName: 'li',

  className: 'zombie',

  template: _.template('<%= text %>'),

  initialize: function () {

    this.model.on( 'change', this.render, this );
    this.options.parent.on( 'close:all', this.close, this );
    // this.listenTo(this.model, 'change', this.render);
    // this.listenTo(this.options.parent, 'close:all', this.close);
  },

  events: {
    'click': 'close'
  },

  render: function () {

    this.$el.html( this.template( this.model.toJSON() ));

    return this;

  },

  close: function () {

    console.log('Kill');

    this.unbind();  // old

    this.model.unbind( 'change', this.render, this ); // Unbind reference to the model
    this.options.parent.unbind( 'close:all', this.close, this ); // Unbind reference to the parent view
 
    this.remove(); // Remove view from DOM. old
 
    // delete this.$el; // Delete the jQuery wrapped object variable
    // delete this.el; // Delete the variable reference to this node

  }

});

// App Level View
// ------------------

var AppView = Backbone.View.extend({

  el: '#app',

  events: {

    'click #add': 'addView',
    'click #remove-all': 'closeAll'

  },

  initialize: function () {
    // this.views = [];
  },

  addView: function () {

    var model = new Model();
    var view = new ItemView({
      model: model,
      parent: this
    });

    $('#bin').append(view.render().el);

  },

  closeAll: function () {

    this.trigger('close:all');
  }

});

// DOC Ready
// ------------------

$(function() {

  var appView = new AppView();

});
