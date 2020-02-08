function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function() {
    //... magic
  };

  this.draw = function() {
    this.computeOptimumLocation();

    console.log("draw a circle");
  };
}
