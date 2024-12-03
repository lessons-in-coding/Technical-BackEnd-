class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  // Method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log('------------');
  }

  // Method which determines whether or not a character's "hitpoints" are less then zero
  // Returns true or false depending upon the outcome
  isAlive() {
    if (this.hitPoints <= 0) {
      console.log(`${this.name} has been defeated!`);
      return false;
    }
    return true;
  }

  // Method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
    opponent.hitPoints -= this.strength;
  }
}

// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 30, 75);
const dijkstra = new Character('Dijkstra', 20, 105);

// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
dijkstra.printStats();

// const intervalId = setInterval(callbackFunction, timeInMilliseconds);
const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval); // stop the interval
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(dijkstra);
    dijkstra.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);



/*
1. Constructor Example:
const grace = new Character('Grace', 30, 75);
This creates a Character named “Grace” with 30 strength and 75 hit points.

2. Methods
Stats for Grace are as following:
Each attack will do 30 damage.
Grace has 75 hit points remaining!
------------
grace.attack(dijkstra);
Grace hit Dijkstra for 30
*/

/*
1. Initial Stats:
Stats for Grace are as following:
Each attack will do 30 damage.
Grace has 75 hit points remaining!
------------
Stats for Dijkstra are as following:
Each attack will do 20 damage.
Dijkstra has 105 hit points remaining!
------------

2. Grace's Turn:
Grace hit Dijkstra for 30
Stats for Dijkstra are as following:
Each attack will do 20 damage.
Dijkstra has 75 hit points remaining!
------------

Dijkstra's Turn:
Dijkstra hit Grace for 20
Stats for Grace are as following:
Each attack will do 30 damage.
Grace has 55 hit points remaining!
------------

3. Game End:
When one character’s hit points drop to 0 or below:
Dijkstra has been defeated!
Game over!
*/

/*
let counter = 0;

const intervalId = setInterval(() => {
  console.log(`Counter: ${counter}`);
  counter++;

  // Stop the interval after 5 iterations
  if (counter === 5) {
    clearInterval(intervalId);
    console.log('Interval stopped');
  }
}, 1000);

=====================================

Feature	            setTimeout	                            setInterval
=======             ==========                              ===========
Purpose	            Executes a function once after a delay.	Executes a function repeatedly at intervals.
Syntax	            setTimeout(callback, delay, ...args)	  setInterval(callback, delay, ...args)
Execution	          Runs the callback only once after delay.Runs the callback every delay milliseconds until stopped.
Stopping Execution	Not necessary since it runs only once.	Must use clearInterval(intervalId) to stop it.
Example Use Case	  Delayed actions, like showing a popup.	Periodic tasks, like updating a clock or polling a server.


setTimeout
==========
console.log('Start');

setTimeout(() => {
  console.log('This message is delayed by 2 seconds');
}, 2000);

console.log('End');



setInterval
===========
let counter = 0;

const intervalId = setInterval(() => {
  console.log(`Counter: ${counter}`);
  counter++;

  if (counter === 5) {
    clearInterval(intervalId); // Stop the interval after 5 repetitions
    console.log('Interval stopped');
  }
}, 1000);



setTimeout(() => {
  console.log('This will happen once after 3 seconds');
}, 3000);

setInterval(() => {
  console.log('This will run every 2 seconds');
}, 2000);
*/