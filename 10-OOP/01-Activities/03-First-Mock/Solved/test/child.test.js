const Child = require('../child'); //Import the Child class to test

describe('Child', () => {
  describe('Initialization', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
      const child = new Child('Sarah', 3); 

      expect(child.name).toEqual('Sarah');
      expect(child.age).toEqual(3);
    });

    it('should throw an error if provided no arguments', () => {
      const cb = () => new Child();

      expect(cb).toThrow();
    });

    it('should throw an error if not provided an age', () => {
      const cb = () => new Child('Sarah');
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Child(3, 2);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      const cb = () => new Child('Sarah', '2');
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Child('Sarah', -1);
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });
  });
});





/*
const Child = require('./child');

describe('Child class', () => {
  // Test valid input
  it('should create a child with valid name and age', () => {
    const child = new Child('Alice', 5);
    expect(child.name).toBe('Alice');
    expect(child.age).toBe(5);
  });

  // Test invalid name
  it('should throw an error if the name is not a non-empty string', () => {
    expect(() => {
      new Child('', 5);
    }).toThrowError("Expected parameter 'name' to be a non-empty string");

    expect(() => {
      new Child(123, 5);
    }).toThrowError("Expected parameter 'name' to be a non-empty string");
  });

  // Test invalid age
  it('should throw an error if the age is not a non-negative number', () => {
    expect(() => {
      new Child('Alice', -1);
    }).toThrowError("Expected parameter 'age' to be a non-negative number");

    expect(() => {
      new Child('Alice', 'five');
    }).toThrowError("Expected parameter 'age' to be a non-negative number");
  });
});
*/
