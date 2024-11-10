// 1. funnyCase makes each letter in a string the opposite case as the one before
function funnyCase(string) {
  // Create an empty string to store the result
  let newString = '';
  
  // Loop through each character in the input string
  for (let i = 0; i < string.length; i++) {
    // Check if the index is even
    if (i % 2 === 0) {
      // If even, add the lowercase version of the character to newString
      newString += string[i].toLowerCase();
    } else {
      // If odd, add the uppercase version of the character to newString
      newString += string[i].toUpperCase();
    }
  }
  
  // Return the final result with alternating cases
  return newString;
}

// Test the function with an example
console.log(funnyCase("You can't just do whatever you want all the time!"));

// --------------------------------------------------------------------------

// 2. Map lets you loop over an array and modify the elements inside
// Define a function called map that takes an array (arr) and a callback function (cb)
function map(arr, cb) {
  // Create an empty array to store the results
  let result = [];

  // Loop through each index of the input array
  for (let index = 0; index < arr.length; index++) {
    // Get the current element from the array at the current index
    let currentElement = arr[index];

    // Call the callback function with the current element and index
    // Add the result to the result array
    result.push(cb(currentElement, index));
  }

  // Return the array with the modified elements
  return result;
}

// Define an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the map function to double each number in the array
var doubled = map(numbers, function(element) {
  return element * 2; // Multiply the current element by 2
});

// Print the result to the console
console.log(doubled); // Prints: [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// --------------------------------------------------------------------------

// 3. filter lets you loop over an array and remove elements
// Define a function called filter that takes an array (arr) and a callback function (cb)
function filter(arr, cb) {
  // Create an empty array to store the filtered results
  let result = [];

  // Loop through each index of the input array
  for (let index = 0; index < arr.length; index++) {
    // Get the current element from the array at the current index
    let currentElement = arr[index];

    // Call the callback function with the current element and index
    // If the callback returns true, add the current element to the result array
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }

  // Return the array with the filtered elements
  return result;
}

// Define an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter function to get only the even numbers from the array
var evenNumbers = filter(numbers, function(currentElement) {
  return currentElement % 2 === 0; // Check if the current element is even
});

// Print the result to the console
console.log(evenNumbers); // Prints: [ 2, 4, 6, 8, 10 ]

// --------------------------------------------------------------------------

// 4. netflixQueue is an object for managing your netflix queue
// Create an object called netflixQueue to manage a list of movies
var netflixQueue = {
  // Initialize the queue with a list of movies
  queue: [
    'Mr. Nobody',
    'The Matrix',
    'Eternal Sunshine of the Spotless Mind',
    'Fight Club'
  ],
  
  // Method to watch (remove) the last movie from the queue
  watchMovie: function() {
    this.queue.pop(); // Remove the last movie from the queue
  },

  // Method to add a new movie to the front of the queue
  addMovie: function(movie) {
    this.queue.unshift(movie); // Add the new movie to the beginning of the queue
  },

  // Method to print the list of movies in the queue
  printQueue: function() {
    var list = ''; // Initialize an empty string to hold the movie list
    // Loop through the queue in reverse order to print the movies
    for (var i = this.queue.length - 1; i >= 0; i--) {
      var currentMovie = this.queue[i]; // Get the current movie
      // Create a numbered list of movies
      list += this.queue.length - i + '. ' + currentMovie + '\n';
    }
    console.log(list); // Print the formatted list of movies
  }
};

// Print the initial movie queue
console.log('Printing movie queue!\n');
netflixQueue.printQueue(); // Display the current movie queue

// Watch a movie (remove the last one)
netflixQueue.watchMovie();
console.log('\nWatched a movie!\n');

// Print the updated movie queue after watching one
console.log('Printing movie queue!\n');
netflixQueue.printQueue(); 

// Add a new movie to the queue
console.log('\nAdding a movie!\n');
netflixQueue.addMovie('Black Swan');

// Print the final movie queue after adding a new movie
console.log('Printing movie queue!\n');
netflixQueue.printQueue();