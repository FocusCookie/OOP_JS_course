function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.toString = function() {
  console.log("draw a circle with radius " + this.radius);
};

const c1 = new Circle(1);
