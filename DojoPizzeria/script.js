// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);

// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);


var pizza = {
    crustType: ["deep dish","hand tossed"],
    sauceType: ["traditional","marinara"],
    cheeses : ["mozzarella","mozzarella", "feta"],
    toppings : ["pepperoni", "sausage","mushrooms", "olives", "onions"],
};

// function pizzaOven(crustType,sauceType,cheeses,toppings){

//     var pizza = {
//         "crustType" : crustType,
//         "sauceType" : sauceType,
//         "cheeses" : cheeses,
//         "toppings" : toppings,
//     };
//         return pizza;
// }

var crustTypearr = ["deep dish","hand tossed"];
var sauceTypearr=["traditional","marinara"];
var cheesesarr = ["mozzarella","mozzarella", "feta"];
var toppingsarr = ["pepperoni", "sausage","mushrooms", "olives", "onions"];

function randPizzaOven(){
    var randpizza = {};
    
    randpizza.crustType = crustTypearr[Math.floor(Math.random()* cheesesarr.length)];
    randpizza.sauceType = sauceTypearr[Math.floor(Math.random()* sauceTypearr.length)];
    randpizza.cheesesarr = cheesesarr[Math.floor(Math.random()* cheesesarr.length)];
    randpizza.toppingsarr = toppingsarr[Math.floor(Math.random()* toppingsarr.length)];
    return randpizza;

}

var p1 = randPizzaOven();
console.log(p1);

