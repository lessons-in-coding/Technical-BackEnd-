// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  var largest = null;
  var secondLargest = null;

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }

  return largest * secondLargest;
};

productOfLargestTwo(5, 3, 8, 4, 9, 1);






/*
Example

If arr = [3, 5, 1, 8, 7], let’s go through the function step-by-step:
	1.	Start: largest = null, secondLargest = null.
	2.	First Iteration (currentNumber = 3):
	•	largest is null, so largest = 3, secondLargest remains null.
	3.	Second Iteration (currentNumber = 5):
	•	5 > 3 (current largest), so secondLargest = 3 and largest = 5.
	4.	Third Iteration (currentNumber = 1):
	•	1 is not greater than largest or secondLargest, so nothing changes.
	5.	Fourth Iteration (currentNumber = 8):
	•	8 > 5 (current largest), so secondLargest = 5 and largest = 8.
	6.	Fifth Iteration (currentNumber = 7):
	•	7 > 5 (current secondLargest), so secondLargest = 7.

After the loop, largest = 8 and secondLargest = 7, so the function returns 8 * 7 = 56.


1. Type Differences
	•	null is a special value in JavaScript that represents the intentional absence of any value. Its type is object.
	•	'' (an empty string) is simply a string with zero characters. Its type is string.

2. Use Cases and Behavior
	•	null is commonly used to indicate that a variable has no value, often as a placeholder or to reset a variable.
	•	'' is used to represent a string with no content, but it’s still a defined string value.

var largest = null;
var secondLargest = '';

console.log(largest > 5); // false, as expected since largest is null
console.log(secondLargest > 5); // true, because '' gets coerced to 0, which can lead to unexpected results
  */