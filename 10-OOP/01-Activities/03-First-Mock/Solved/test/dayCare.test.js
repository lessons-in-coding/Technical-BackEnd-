const DayCare = require('../dayCare');
const Child = require('../child');

describe('DayCare', () => {
  describe('Initialization', () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe('addChild', () => {
    it("should add a child to the 'children' array", () => {
      const child = new Child('Tammy', 1);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child('Tammy', 8); // Over age limit
      const dayCare = new DayCare();
      // The following line of code uses the jest.spyOn method to mock and spy on the console.log method.
      const mock = jest.spyOn(console, 'log');
     
      // Replacing console.log with an empty function allows us to spy on the values provided to console.log when the test is run.
      mock.mockImplementation(() => {}); // Suppress actual console.log

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(0);
      // The following message will NOT be logged in the console. jest.spyOn is instead 'spying on' the value passed into console.log and verifying that the expected message is being run.
      expect(mock).toBeCalledWith(
        'Unable to add child, they are over the age limit'
      );
      mock.mockRestore();
    });

    it('should not add a child if already at capacity', () => {
      const dayCare = new DayCare();
      const child = new Child('Alice', 4);
      const mock = jest.spyOn(console, 'log');
      mock.mockImplementation(() => {});
      dayCare.children = [
        new Child('Tammy', 1),
        new Child('Mark', 2),
        new Child('Alvin', 1)
      ];

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(3);
      expect(mock).toBeCalledWith('At capacity, unable to add more children');

      mock.mockRestore();
    });

    it('should throw an error if not provided a Child object as an argument', () => {
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };
      expect(cb).toThrowError(err);
    });
  });

  describe('pickupChild', () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child('Tammy', 1);
      const child2 = new Child('Mark', 2);
      const child3 = new Child('Alvin', 1);
      const mock = jest.spyOn(console, 'log');
      dayCare.children = [child1, child2, child3];
      mock.mockImplementation(() => {});
      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
      expect(mock).toBeCalledWith(`Picked up ${child2.name} from day care`);
      mock.mockRestore();
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child('Tammy', 1);
      const child2 = new Child('Mark', 2);
      const child3 = new Child('Alvin', 1);
      const mock = jest.spyOn(console, 'log');
      dayCare.children = [child1, child2, child3];
      mock.mockImplementation(() => {});
      const removed = dayCare.pickupChild('Fred');

      expect(typeof removed).toEqual('undefined');
      expect(dayCare.children).toEqual([child1, child2, child3]);
      expect(mock).toBeCalledWith('Child not found');

      mock.mockRestore();
    });
  });
});






/*
const Child = require('./child');
const DayCare = require('./dayCare');

describe('DayCare class', () => {
  let dayCare;
  let child;

  beforeEach(() => {
    dayCare = new DayCare();
    child = new Child('Alice', 5);
  });

  // Test adding a child
  it('should add a child to the daycare', () => {
    dayCare.addChild(child);
    expect(dayCare.children.length).toBe(1);
    expect(dayCare.children[0].name).toBe('Alice');
  });

  // Test adding a child when the daycare is at capacity
  it('should not add a child if the daycare is at capacity', () => {
    // Add 3 children to the daycare
    dayCare.addChild(new Child('Bob', 3));
    dayCare.addChild(new Child('Charlie', 4));
    dayCare.addChild(new Child('David', 2));

    // Try to add a 4th child
    const newChild = new Child('Eve', 5);
    dayCare.addChild(newChild);

    // Expect the daycare not to add the 4th child
    expect(dayCare.children.length).toBe(3);
    expect(dayCare.children[2].name).toBe('David'); // The last valid child added
  });

  // Test rejecting a child that's too old
  it('should not add a child over the age limit', () => {
    const oldChild = new Child('John', 7); // Over age limit
    dayCare.addChild(oldChild);
    expect(dayCare.children.length).toBe(0); // No children should be added
  });

  // Test rejecting invalid child type
  it('should throw an error if the child is not an instance of Child', () => {
    expect(() => {
      dayCare.addChild({});
    }).toThrowError("Expected parameter 'child' to be an instance of Child");
  });

  // Test picking up a child
  it('should pick up a child from daycare by name', () => {
    dayCare.addChild(child);
    const pickedUpChild = dayCare.pickupChild('Alice');
    expect(pickedUpChild.name).toBe('Alice');
    expect(dayCare.children.length).toBe(0); // After picking up, the list should be empty
  });

  // Test trying to pick up a child that doesn't exist
  it('should return an error if the child is not found during pickup', () => {
    dayCare.addChild(child);
    const pickedUpChild = dayCare.pickupChild('Nonexistent');
    expect(pickedUpChild).toBeUndefined(); // The child wasn't found
  });
});
*/

/*
//Jest Spy On

//1. What is jest.spyOn?
=========================
test('spy on console.log', () => {
  const spy = jest.spyOn(console, 'log'); // Start spying on console.log
  
  console.log('Hello, world!'); // Call the function being spied on

  // Verify if console.log was called
  expect(spy).toHaveBeenCalled(); 
  expect(spy).toHaveBeenCalledWith('Hello, world!'); // Check the arguments passed
  
  spy.mockRestore(); // Stop spying and restore original behavior
});

	1.	Set up the spy:
	•	jest.spyOn(console, 'log') tells Jest to monitor calls to console.log.
	2.	Call the function:
	•	The actual console.log('Hello, world!') is executed.
	3.	Test the spy:
	•	expect(spy).toHaveBeenCalled() ensures the function was called.
	•	expect(spy).toHaveBeenCalledWith('Hello, world!') checks the arguments passed.
	4.	Restore original behavior:
	•	spy.mockRestore() removes the spy and restores console.log to its original functionality.


  //2. What is mockImplementation?
  ================================

	•	mockImplementation replaces the original function’s behavior with a mocked function.
	•	This is helpful when you want to test how your code behaves without calling the real function.

  test('mock console.log implementation', () => {
  const mock = jest.spyOn(console, 'log'); // Spy on console.log
  
  mock.mockImplementation(() => {
    console.log('Mocked implementation!'); // Replace behavior
  });

  console.log('Hello, world!'); // Call the mocked function

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith('Hello, world!');

  mock.mockRestore(); // Restore original behavior
});


  3. What is mockRestore?
  =======================

	•	mockRestore stops mocking or spying on a function and restores its original implementation.
	•	This is important to prevent tests from interfering with each other.

  test('mock implementation with restore', () => {
  const mock = jest.spyOn(console, 'log');

  mock.mockImplementation(() => {
    console.log('Mocked behavior!');
  });

  console.log('This is a test.'); // Calls mocked behavior

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith('This is a test.');

  mock.mockRestore(); // Restore original functionality

  console.log('Original behavior.'); // No mocking here
});


Beginner-Friendly Test Scenario
===============================
class Calculator {
  add(a, b) {
    console.log(`Adding ${a} + ${b}`);
    return a + b;
  }
}

module.exports = Calculator;

//Test with Spy, Mock, and Restore
-----------------------------------
const Calculator = require('./Calculator');

test('spying and mocking add method', () => {
  const calculator = new Calculator();
  const spy = jest.spyOn(calculator, 'add'); // Spy on the add method

  // Mock the implementation
  spy.mockImplementation((a, b) => {
    console.log('Mocked add method');
    return 42; // Return a fixed value
  });

  // Call the mocked method
  const result = calculator.add(2, 3);

  expect(spy).toHaveBeenCalled(); // Verify the method was called
  expect(spy).toHaveBeenCalledWith(2, 3); // Verify arguments
  expect(result).toBe(42); // Check mocked return value

  spy.mockRestore(); // Restore original behavior
});
 */