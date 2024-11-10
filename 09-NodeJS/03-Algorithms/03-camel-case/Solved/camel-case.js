// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  var result = "";
  var words = str.toLowerCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var letters = word.split("");

    if (i > 0) {
      letters[0] = letters[0].toUpperCase();
    }

    result += letters.join("");
  }

  return result;
};
// camelCase("hello world yangon")









/*
Example
camelCase("hello world example")
words = ["hello", "world", "example"];
Let’s say str = "hello world example".
	1.	Convert to Lowercase and Split into Words: words becomes ['hello', 'world', 'example'].
	2.	First Iteration (i = 0):
	•	word = 'hello', letters = ['h', 'e', 'l', 'l', 'o'].
	•	Since i = 0, we skip the capitalization step.
	•	result += 'hello', so result is now "hello".
	3.	Second Iteration (i = 1):
	•	word = 'world', letters = ['w', 'o', 'r', 'l', 'd'].
	•	i > 0, so letters[0] = letters[0].toUpperCase(), making letters = ['W', 'o', 'r', 'l', 'd'].
	•	result += 'World', so result becomes "helloWorld".
	4.	Third Iteration (i = 2):
	•	word = 'example', letters = ['e', 'x', 'a', 'm', 'p', 'l', 'e'].
	•	i > 0, so letters[0] = letters[0].toUpperCase(), making letters = ['E', 'x', 'a', 'm', 'p', 'l', 'e'].
	•	result += 'Example', so result becomes "helloWorldExample".

The function then returns "helloWorldExample".
*/