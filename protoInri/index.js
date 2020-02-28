function HtmlElement() {
  this.click = function() {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focus");
};

function HtmlSelectElement(items) {
  this.items = items;
  this.addItem = function(item) {
    this.items.push(item);
  };
  this.removeItem = function(item) {
    this.items = this.items.filter(elem => elem !== item);
  };
}

HtmlSelectElement.prototype = new HtmlElement(); // This is different then in the training befor! (extend function)
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const element = new HtmlElement();
let select = new HtmlSelectElement(["1", "2", "3"]);
