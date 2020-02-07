const circleOld = {
  radius: 1,
  draw: function() {
    console.log("draw");
  }
};

// factory function
function createCircle(radius) {
  return {
    radius, //instead od radius:radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);
circle.draw();

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw constructor");
  };
}

const another = new Circle(1);
another.draw();

// VALUE vs Reference type
let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);

// VALUE vs Reference type
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj.value);
