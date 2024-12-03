function Child(name, age) {
  // Validate 'name' to ensure it's a non-empty string
  if (typeof name !== 'string' || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  // Validate 'age' to ensure it's a non-negative number
  if (typeof age !== 'number' || isNaN(age) || age < 0) {
    throw new Error("Expected parameter 'age' to be a non-negative number");
  }

  // Set the properties 'name' and 'age' on the instance of Child
  this.name = name;
  this.age = age;
}

module.exports = Child;
