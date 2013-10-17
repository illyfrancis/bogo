define(['models/ModelOne', 'models/ModelTwo'], function (ModelOne, ModelTwo) {
  return function () {
    // depends on ModelOne and ModelTwo
    this.modelOne = new ModelOne();
    this.modelTwo = new ModelTwo();
    this.render = function () {
      console.log('render view one');
    };
  };
});
