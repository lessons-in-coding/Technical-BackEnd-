# Step1: Check the file structure
project/
├── lib/
│   ├── Potion.js
│   └── random.js
├── __tests__/
│   ├── Potion.test.js
│   └── random.test.js
├── package.json

# Step2: Verify exports
    •	Potion.js: module.exports = Potion;
	•	random.js: module.exports = randomNumber;

# Step3: Run the tests
    - npm test

* Ensure Jest is installed and configured in the package.json.
    - npm install --save-dev jest
    - "scripts": {
                "test": "jest"
                }

==================================


## 1. Potion.test.js

This file contains tests for the Potion class (or function) using a testing framework like Jest. The purpose of the tests is to ensure that the Potion function behaves as expected.

* This imports the Potion function from the Potion.js file.
    - const Potion = require('../lib/Potion.js');

* Test 1: creates a health potion object
    - Creates a potion named "health" and verifies

* Test 2: creates a random potion object
    - Creates a random potion (without providing a name) and verifies

** Potion is not a constructor


## 2. random.test.js

This file tests the randomNumber function from random.js.

* Imports the randomNumber function from random.js.
    - const randomNumber = require('../lib/random');

* Test: generates a random number between 1 and 10
* Random Logic in randomNumber


## 3. Potion.js (Constructor)

This file defines the Potion constructor function.
* The Potion constructor is exported so it can be used in other files.
    - verify the Potion constructor is correctly written
    - ensure module.exports = Potion; in included for export


## 4. random.js (Utility)

This file defines and exports a utility function randomNumber.

=============================

### 1. What Is a Constructor?

	•	A constructor is a special kind of function in JavaScript that is used to create and initialize objects.
	•	When you use the new keyword with a constructor, it:
	1.	Creates a new object.
	2.	Sets the prototype of the new object to the constructor’s prototype.
	3.	Executes the constructor function, binding this to the new object.
	4.	Returns the new object (unless the constructor explicitly returns a different object).

Example:
    function Potion(name) {
    this.name = name || "health"; // Initializes properties
    this.value = Math.floor(Math.random() * 10 + 1); // Assigns a value
    }

    // Using the constructor to build an object
    const healthPotion = new Potion("health");

    console.log(healthPotion); 
    // Output: { name: 'health', value: <random number> }

    •	Key Point: The constructor is still a function, but when used with new, it acts as a blueprint for creating objects.


### 2. What Is a Utility Function?

	•	A utility function is a regular function that performs a specific task or provides reusable functionality.
	•	It is not tied to creating objects or initializing data.
	•	Utility functions can be standalone and are commonly used by constructors, other functions, or classes.

Example:
    function randomNumber() {
    return Math.floor(Math.random() * 10 + 1); // Generates a random number
    }

    •	Utility functions can be used inside constructors to help with calculations or other logic.

    Example of a Utility Function Inside a Constructor:
    function randomNumber() {
    return Math.floor(Math.random() * 10 + 1);
    }

    function Potion(name) {
    this.name = name || "health";
    this.value = randomNumber(); // Using the utility function
    }

    const strengthPotion = new Potion("strength");
    console.log(strengthPotion); 
    // Output: { name: 'strength', value: <random number> }

### 3. Relationship Between Constructors and Utility Functions

	•	Constructors build objects, initializing them with properties and logic.
	•	Utility functions support constructors by performing specific tasks like generating random values, formatting strings, or calculating results.

How They Work Together:
	•	A constructor might use one or more utility functions to simplify its logic or perform complex operations.

Example:
    // Utility function
    function generateValue(type) {
    if (type === "health") {
        return Math.floor(Math.random() * 10 + 30); // Value: 30-39
    } else {
        return Math.floor(Math.random() * 5 + 7); // Value: 7-11
    }
    }

    // Constructor
    function Potion(name) {
    this.types = ["strength", "agility", "health"];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    this.value = generateValue(this.name); // Uses the utility function
    }

    const agilityPotion = new Potion("agility");
    console.log(agilityPotion);
    // Output: { name: 'agility', value: <random number> }

### 4. Key Differences Between Constructors and Utility Functions
    Feature	            Constructor	                            Utility Function
    Purpose	            Builds and initializes objects.	        Performs specific reusable tasks.
    Invocation	        Called with new (e.g., new Potion()).	Called directly (e.g., randomNumber()).
    Result	            Returns an object (usually).	        Returns a value or performs an action.
    Example Use Case	Create a potion with properties.	    Generate random numbers for potion values.
    Naming Convention	Capitalized (e.g., Potion).	            Lowercase or camelCase (e.g., randomNumber).

Summary
    •	Constructor: A function used to create objects. It’s called with new and builds an object.
	•	Utility Function: A function that performs a task. It’s called directly and helps with logic inside constructors, classes, or other functions.