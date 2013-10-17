// naive approach
var ModelOne = function () {
  // model one
};

var ModelTwo = function () {
  // model two
};

var ViewOne = function () {
  // depends on ModelOne and ModelTwo
  this.modelOne = new ModelOne();
  this.modelTwo = new ModelTwo();
  this.render = function () {
    console.log('render view one');
  };
};

var AnotherView = function () {
  // do another view stuff
};

// the app
var view = new ViewOne();
view.render();