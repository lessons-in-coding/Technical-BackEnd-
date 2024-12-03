// Require algo file
const Algo = require('../algo');

describe('Algo', () => {
  describe('reverse', () => {
    // 'reverse' should reverse "Hello World!"
    it('should reverse a given string', () => {
      // In order to test the function, we need to create a working example. First we define 'str'.
      const str = 'Hello World!';
      // Next we define 'reversed' as the value of 'str' reversed.
      const reversed = '!dlroW olleH';
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = new Algo().reverse(str);
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(reversed);
    });
  });

  describe('isPalindrome', () => {
    // First test for '.isPalindrome()'
    it('should return true if a string is a palindrome', () => {
      const str = 'racecar';

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(true);
    });
    // Second test for '.isPalindrome()'
    it('should return false if a string is not a palindrome', () => {
      const str = 'neon';

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(false);
    });
  });

  describe('capitalize', () => {
    it('should take a string and return a new string with the first letter of each word capitalized', () => {
      const str = 'capitalize every first word of the string.';
      const capitalized = 'Capitalize Every First Word Of The String.';

      const result = new Algo().capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
});










/*
const Algo = require('./algo');

describe('Algo class tests', () => {
  let algo;

  beforeEach(() => {
    algo = new Algo();
  });

  test('reverse should reverse the string correctly', () => {
    expect(algo.reverse('hello')).toBe('olleh');
    expect(algo.reverse('abcd')).toBe('dcba');
  });

  test('isPalindrome should return true for palindromes and false for non-palindromes', () => {
    expect(algo.isPalindrome('Racecar')).toBe(true);
    expect(algo.isPalindrome('hello')).toBe(false);
    expect(algo.isPalindrome('madam')).toBe(true);
  });

  test('capitalize should capitalize the first letter of each word', () => {
    expect(algo.capitalize('hello world')).toBe('Hello World');
    expect(algo.capitalize('javascript is fun')).toBe('Javascript Is Fun');
    expect(algo.capitalize('hello')).toBe('Hello');
  });
});


Explanation of Test Structure

	•	beforeEach(): This is used to create a new instance of Algo before each test runs, ensuring that tests do not interfere with each other.
	•	expect(): This is used to define what the output should be for each test.
	•	toBe(): This is a Jest matcher that checks for strict equality.
*/

/*
//Reasons to Use () => { } (Arrow Functions)

	1.	Scope isolation: Arrow functions inherit the scope, preventing unintended behavior from external variables.
	2.	Binding of this: Arrow functions lexically bind this, avoiding confusion with the context in which describe, it, or test is invoked.
	3.	Simpler syntax: Arrow functions are shorter and more concise, making the test code cleaner and easier to read.
	4.	Consistent handling of asynchronous operations: Arrow functions automatically handle asynchronous tasks without requiring complex binding of this.
*/
