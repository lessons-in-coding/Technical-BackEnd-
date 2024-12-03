//Step6
// __tests__/Potion.test.js
//Potion is not a constructor
const Potion = require('../lib/Potion.js');

//1st failing test
test('creates a health potion object', () => {
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
});

//2nd failing test
test('creates a random potion object', () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
