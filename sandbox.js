// convert Celcius to Fahrenheit
function convertToF(celcius) {
  let fahrenheit = celcius * (9 / 5) + 32;
  return fahrenheit;
}

// Reverse a String
function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

// Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

// Find the Longest Word in a String
// Return the length of the longest word in a sentence
function findLongestWordLength(str) {
  let words = str.split(" ");
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }
  return max;
}

// Return the Largest Numbers within Multiple Arrays
function largestOfFour(arr) {
  let newArr = [];
  // iterate through the outer array
  for (let i = 0; i < arr.length; i++) {
    let maxNum = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      // if the number in the inner loop is bigger, update maxNum
      if (arr[i][j] > maxNum) {
        // save that number in the corresponding position in newArr
        maxNum = arr[i][j];
      }
    }
    newArr[i] = maxNum;
  }
  return newArr;
}

// Confirm the Ending of a String
function confirmEnding(str, target) {
  // remove excess length of str that doesn't match length of target and compare
  return str.slice(str.length - target.length) === target;
}

// Repeat a string
function repeatStringNumTimes(str, num) {
  let repeat = "";

  while (num > 0) {
    repeat += str;
    num--;
  }
  return repeat;
}

// Truncate a String
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// Look through an Array and return the first element that passes a 'test'
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
findElement([1, 2, 3, 4], (num) => num % 2 === 0);
