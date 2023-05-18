//***Task #1***
// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// function oddOrEven(array) {
//   const sum = array.reduce((calc, elem) => calc + elem, 0);
//   if (sum % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// console.log(oddOrEven([0, -1, -5]));

// ***
//***Task #2***
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const count = {};

  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    count[element] = (count[element] || 0) + 1;
  }
  return count;
}

console.log(count("abakjkj"));

// ***
//***Task #3***
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function speed(n) {
  return Math.floor((n * 100000) / 3600);
}

console.log(speed(1.08));
