class Toppings {
  constructor(toppings) {
    this.toppings = Array.isArray(toppings) ? toppings : [];
  }
  outputList() {
    this.toppings.forEach((topping, i) => {
      console.log(topping, i + '/' + this.toppings.length)  // `this` works!
    });
  }
}

var myToppings = new Toppings(['cheese', 'lettuce']);

myToppings.outputList();
