function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log("eating");
  }
};
const canWalk = {
  walk: function() {
    console.log("walking");
  }
};
const canSwim = {
  swim: function() {
    console.log("swimming");
  }
};

function Person() {}
mixin(Person.prototype, canEat, canWalk, canSwim);

const person = new Person();
console.log(person);

function Fish() {}
mixin(Fish.prototype, canEat, canSwim);

const goldfish = new Fish();
console.log(goldfish);
