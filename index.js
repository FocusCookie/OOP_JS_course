function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw a circle");
  };
}

const circle = new Circle(10);

for (let key in circle) {
  console.log(key);
}
// Output radius draw

for (let key in circle) {
  console.log(key, circle[key]);
}
// Output radius 10
// draw f()....

// only log the non functions
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log("Circle has a radius");
