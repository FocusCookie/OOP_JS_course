let person = { name: "stephan" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false, // the property will not show up in Objects.keys(person)
  configurable: false // not deletable anymore
});

delete person.name;

console.log(person);
