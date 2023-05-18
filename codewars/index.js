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

function oddOrEven(array) {
  const sum = array.reduce((calc, elem) => calc + elem, 0);
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven([0, -1, -5]));

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

// ***
//***Task #4***
// Write a function that removes the spaces from the string, then return the resultant string.
// Examples:
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function noSpace(x) {
  let str = "";
  for (let index = 0; index < x.length; index++) {
    const element = x[index];
    if (element !== " ") {
      str += element;
    }
  }
  return str;
}

console.log(noSpace("8j8mBliB8gimjB8B8jlB"));

// ***
//***Task #5***
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  let arr = [];
  for (let index = n; index > 0; index--) {
    arr.push(index);
  }
  return arr;
};

console.log(reverseSeq(5));
