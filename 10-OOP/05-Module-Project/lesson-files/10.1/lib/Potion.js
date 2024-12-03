//Step7
// lib/Potion.js
function Potion(name) {
  //B
  this.types = ["strength", "agility", "health"];
  this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

  //A
  //this.name = name;
  if (this.name === "health") {
    this.value = Math.floor(Math.random() * 10 + 30); // Health range: 30-39
  } else {
    this.value = Math.floor(Math.random() * 5 + 7); // Other range: 7-11
  }
}

// Export the constructor
module.exports = Potion; // PascalCase







/*
  •	The Potion file defines a constructor function (function Potion(name) {}), which is used to create objects.
  •	Constructor functions and classes in JavaScript are conventionally written with a capitalized first letter to follow PascalCase.

  const Potion = require('./Potion');
  const healthPotion = new Potion('health'); // Creates a new Potion instance.

  •	The random.js file defines a utility function (function randomNumber() {}), not a constructor or class.
  •	Utility functions are typically named in camelCase (e.g., randomNumber) or lowercase when naming the file.

  const randomNumber = require('./random');
  console.log(randomNumber()); // Calls the randomNumber function directly.

  Key Differences Between Potion and random
  Aspect	          Potion.js	                                  random.js
  Purpose	          Creates objects via a constructor function.	Provides a utility function.
  Naming Convention	Capitalized (Potion) for constructors.	    Lowercase (random) for utilities.
  Usage	            Instantiated using new.	                    Called directly.
  Exports	          Exports a constructor.	                    Exports a function.
*/

// =========================

/*
//Constructor Example
function Car(make, model) {
  this.make = make;
  this.model = model;
}

//Same as
const car = new Car('Honda', 'Civic');
console.log(car);
*/
