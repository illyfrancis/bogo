// using namespace
var app = app || {};
app.models = app.models || {};

app.models.ModelOne = function () {
  // model one
};

app.models.ModelTwo = function () {
  // model two
};

// for views
app.views = app.views || {};

app.views.ViewOne = function () {
  // depends on ModelOne and ModelTwo
  this.modelOne = new app.models.ModelOne();
  this.modelTwo = new app.models.ModelTwo();
  this.render = function () {
    console.log('render view one');
  };
};

app.views.AnotherView = function () {
  // do another view stuff
};

// init view one
var view = new app.views.ViewOne();
view.render();