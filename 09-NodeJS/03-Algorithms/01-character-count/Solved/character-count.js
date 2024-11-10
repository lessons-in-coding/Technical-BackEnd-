// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
  var charMap = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
};

// characterCount("Hello");










/*
Example with “hello”

Let’s walk through how charMap is updated step-by-step for "hello":
	•	First iteration (i = 0): char = 'h'
	•	'h' is not in charMap, so charMap['h'] = 1. charMap now looks like { h: 1 }.
	•	Second iteration (i = 1): char = 'e'
	•	'e' is not in charMap, so charMap['e'] = 1. charMap now looks like { h: 1, e: 1 }.
	•	Third iteration (i = 2): char = 'l'
	•	'l' is not in charMap, so charMap['l'] = 1. charMap now looks like { h: 1, e: 1, l: 1 }.
	•	Fourth iteration (i = 3): char = 'l'
	•	'l' is already in charMap, so charMap['l']++ increments the count of 'l' by 1. charMap now looks like { h: 1, e: 1, l: 2 }.
	•	Fifth iteration (i = 4): char = 'o'
	•	'o' is not in charMap, so charMap['o'] = 1. charMap now looks like { h: 1, e: 1, l: 2, o: 1 }.

By the end, charMap contains each unique character as a key, and the associated values represent how many times each character appears in the string.
*/