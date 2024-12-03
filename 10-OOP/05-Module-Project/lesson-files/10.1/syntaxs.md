## 1. Syntax for Tests

When writing tests for constructors and utility functions, you typically:
	•	Use a testing framework like Jest.
	•	Follow a describe-when-expect structure:
	1.	Describe what you are testing.
	2.	When a specific action occurs.
	3.	Expect the result.

    * Structure of a Jest Test
    // Import the module being tested
    const Module = require('path_to_module');

    // Write your test
    test('description of what is being tested', () => {
    const result = functionOrConstructorCall(); // Perform action
    expect(result).toEqual(expectedValue); // Assertion
    });


## 2. Syntax for a Constructor

A constructor is a function that initializes objects. Here’s the basic syntax:
    // Constructor function
    function ConstructorName(parameters) {
    this.property1 = someValue; // Initialize properties
    this.property2 = anotherValue;
    }

    // Export the constructor
    module.exports = ConstructorName;


## 3. Syntax for a Utility Function

Utility functions are standalone functions that perform reusable tasks. Here’s the syntax:
    // Utility function
    function utilityFunction(parameters) {
    // Perform some logic
    return result;
    }

    // Export the function
    module.exports = utilityFunction;