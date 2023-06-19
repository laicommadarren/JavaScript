// Create a function called pizzaOven that returns a JavaScript (Pizza) Object
function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella, feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3= pizzaOven("thin crust", "barbecue sauce", ["gorgonzola", "ricotta"], ["kalamata olives", "garlic", "onions", "bacon", "sausage"]);
console.log(pizza3);

var pizza4 = pizzaOven("New York", "white sauce", ["mozzarella"], "none")


// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

var crustTypeArray = ["thin crust", "hand tossed", "New York"];
var sauceTypeArray = ["traditional", "white", "barbecue"];
var cheesesArray = ["mozzarella", "ricotta", "feta", "gorgonzola"];
var toppingsArray = ["pepperoni", "sausage", "mushrooms", "bell peppers"]

// random pizza function
function randomPizza() {

  var pizza = {};
  pizza.crustType = crustTypeArray[Math.floor(Math.random()*crustTypeArray.length)];
  pizza.sauceType = sauceTypeArray[Math.floor(Math.random()*sauceTypeArray.length)];
  pizza.cheeses = cheesesArray[Math.floor(Math.random()*cheesesArray.length)];
  pizza.toppings = toppingsArray[Math.floor(Math.random()*toppingsArray.length)];
  return pizza;
}
console.log(randomPizza());

/* random pizza that outputs any number of elements for cheeses, toppings, *in progress*

function randomPizza2() {
  var pizza = {};
  pizza.crustType = crustTypeArray[Math.floor(Math.random()*crustTypeArray.length)];
  pizza.sauceType = sauceTypeArray[Math.floor(Math.random()*sauceTypeArray.length)];
  pizza.cheeses = [];
  numberCheeses = Math.ceil(Math.random()*cheesesArray.length) // number of cheeses chosen at random
  for (var i = 0, i < numberCheeses, i++) {
    // I guess we can slice the cheesesArray and choose another random element from the sliced array
    // We can also make a new array which is a randomized rearrangement of elements in cheesesArray and go from index 0 to numberCheeses-1 and push all the elements into pizza.cheeses or pop the randomized array accordingly and set pizza.cheeses = the popped array
    pizza.cheeses.push = cheesesArray[Math.floor(Math.random()*cheesesArray.length)]; // fix this, need to push a random element in cheesesArray but each time it loops it does not repeat.
  }
  pizza.toppings = toppingsArray[Math.floor(Math.random()*toppingsArray.length)];
  // do a similar thing for toppings as was done for cheeses
  return pizza;
}

*/
