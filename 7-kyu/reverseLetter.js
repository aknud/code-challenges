// Simple Fun #176: Reverse Letter

// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str

// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//golf code solution:
const reverseLetter=str=>str.split('').reverse().join('').replace(/[^a-z]+/g,'');

// function reverseLetter(str) {
//   var re = /[^a-z]+/g;
//   var reverse = str.split('').reverse().join('').replace(re,'')
//   return reverse;
// }