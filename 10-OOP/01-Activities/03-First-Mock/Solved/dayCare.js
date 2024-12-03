const Child = require('./child'); // Import the Child class

function DayCare() {
  this.children = []; // Array to hold child instances
  this.capacity = 3; // Max number of children the day care can hold
  this.ageLimit = 6; // Maximum age of children allowed in the day care
}

DayCare.prototype.addChild = function(child) {
  // Ensure the parameter 'child' is an instance of the Child class
  if (child instanceof Child === false) {
    throw new Error("Expected parameter 'child' to be an instance of Child");
  }

  // Check if the day care has reached its capacity
  if (this.children.length >= this.capacity) {
    console.log('At capacity, unable to add more children');
    return;
  }

  // Check if the child's age is over the age limit
  if (child.age > this.ageLimit) {
    console.log('Unable to add child, they are over the age limit');
    return;
  }

  // Add the child to the day care's children list
  this.children.push(child);
};

DayCare.prototype.pickupChild = function(name) {
  // Find the index of the child by name
  const index = this.children.findIndex(child => {
    return child.name === name;
  });

  // If the child is not found, print a message
  if (index === -1) {
    console.log('Child not found');
    return;
  }

  // If the child is found, print a message and remove the child from the list
  console.log(`Picked up ${name} from day care`);
  return this.children.splice(index, 1)[0]; // Remove and return the child
};

module.exports = DayCare;
