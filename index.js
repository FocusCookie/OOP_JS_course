function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius, color) {
  // use the super constructor to use the color prop frpm the shape on the circle
  Shape.call(this, color);

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log("Circle with Radius " + this.radius);
};

const s = new Shape();
const c = new Circle(1, "greenish");
