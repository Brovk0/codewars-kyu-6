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

// ***
//***Task #6***
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let arr = [];
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (!b.includes(element)) {
      arr.push(element);
    }
  }
  console.log(arr);
}

console.log(arrayDiff([1, 2], [1]));

// ***
//***Task #6***
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(boolToWord(true));

// ***
//***Task #7***
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let s = str.toLowerCase();
  let count = 0;
  for (let index = 0; index < s.length; index++) {
    const e = s[index];
    if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
      count += 1;
    }
  }
  return count;
}

console.log(getCount("abracadabra"));

// ***
//***Task #8***
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  if (n === 0) {
    return "0.00";
  }
  let arr = [1];
  let d = 1;
  for (let index = 1; index < n; index++) {
    arr.push(1 / (d += 3));
  }
  let sum = arr.reduce((calk, elem) => calk + elem, 0);
  return sum.toFixed(2);
}

console.log(SeriesSum(5));

// ***
//***Task #9***
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// ***
//***Task #10***
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arr = s.split(" ");
  let arr2 = [];
  arr.forEach((element) => {
    arr2.push(element.length);
  });
  let arr3 = arr2.sort((a, b) => a - b);

  return arr3[0];
}

// ***
//***Task #11***
// console.log(findShort("Let's travel abroad shall we"));
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let result = 0;
  numbers.forEach((element) => {
    result ^= element;
  });
  return result;
}

console.log(stray([17, 1, 3, 7, 18, 19, 11]));

// ***
//***Task #12***
// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
  let count = 0;
  for (let index = 0; index <= n; index++) {
    if (n % index === 0) {
      count += 1;
    }
  }
  return count;
}

console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(5));
console.log(getDivisorsCnt(12));
console.log(getDivisorsCnt(50));

// ***
//***Task #13***
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

console.log(hoopCount(5));
console.log(hoopCount(10));
console.log(hoopCount(50));

// ***
//***Task #14***
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.

function checkForFactor(base, factor) {
  return base % factor === 0;
}
