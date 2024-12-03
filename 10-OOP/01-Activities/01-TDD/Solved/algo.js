// Currently these functions are empty. As a result, all tests will fail.
function Algo() {}

Algo.prototype.reverse = function(str) {
    return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr === lowerStr.split('').reverse().join('');
};

Algo.prototype.capitalize = function(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

module.exports = Algo;


















/*
Algo.prototype.reverse = function(str) {};
Algo.prototype.reverse = function(str) {
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {};
Algo.prototype.isPalindrome = function(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr === lowerStr.split('').reverse().join('');
};

Algo.prototype.capitalize = function(str) {};
Algo.prototype.capitalize = function(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

//Prototype
===========

// Methods defined on the prototype are shared across all instances.

function Person(name) {
  this.name = name;
}

// Method added to the prototype
Person.prototype.sayHello = function() {
  return `Hello, my name is ${this.name}`;
};

const person1 = new Person('Alice');
const person2 = new Person('Bob');

console.log(person1.sayHello()); // Shared method
console.log(person2.sayHello()); // Shared method


--------

// You can define methods directly inside the constructor function instead of using prototype. However, this approach has drawbacks.

function Person(name) {
  this.name = name;

  // Method defined inside the constructor
  this.sayHello = function() {
    return `Hello, my name is ${this.name}`;
  };
}

const person1 = new Person('Alice');
const person2 = new Person('Bob');

console.log(person1.sayHello()); // Works
console.log(person2.sayHello()); // Works

--------------

// Modern Alternative: class Syntax
// In ES6+, the class syntax simplifies the use of prototypes while maintaining their benefits under the hood.

class Person {
  constructor(name) {
    this.name = name;
  }

  // Method automatically added to the prototype
  sayHello() {
    return `Hello, my name is ${this.name}`;
  }
}

const person1 = new Person('Alice');
const person2 = new Person('Bob');

console.log(person1.sayHello()); // Efficient and shared
console.log(person2.sayHello());
*/
