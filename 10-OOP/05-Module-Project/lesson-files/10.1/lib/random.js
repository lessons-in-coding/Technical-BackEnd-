//Step5
// lib/random.js
function randomNumber() {
  return Math.floor(Math.random() * 9 + 1);
}

module.exports = randomNumber; //camelCase


//Step1-B: (see __tests__/random.test.js) 
//MediaSourceHandle is not defined
// MediaSourceHandle.exports = function() {};

//Step2:
// module.exports = function(val1, val2) {
//   if (val1 === val2) {
//     return true;
//   } else {
//     return false;
//   }
// };