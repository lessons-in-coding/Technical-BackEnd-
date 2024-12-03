//Step3
// __tests__/random.test.js
const randomNumber = require('../lib/random.js');

test('generates a random number between 1 and 10', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessThanOrEqual(10);
});

//Step1-A: (see lib/random.js)
// fails, due to checkIfEqual() not being a function because random.js file does not exist yet.
//checkIfEqual is not a function
/*
const checkIfEqual = require('../lib/random.js');

test('checks if 10 is equal to 10', () => {
  expect(checkIfEqual(10, 10)).toBe(true);
});
*/
