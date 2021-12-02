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

// Check if a value is boolean primitive
function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  }
  return false;
}

// Return the string with the first letter of each word capitalized
function titleCase(str) {
  let strArr = str.toLowerCase().split(" ");
  let newStr = strArr.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return newStr.join(" ");
}

// Copy each element of an array into another array, in order
function frankenSplice(arr1, arr2, n) {
  let copyArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    copyArr.splice(n, 0, arr1[i]);
    n++;
  }
  return copyArr;
}

// Remove all falsy values from an array
function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArr.push(arr[i]);
  }
  return newArr;
}

// Return the lowest index at which a value should be inserted (if in numberical order)
function getIndex(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

// Return true if the string in the first array element contains all the letters of the string in the second element
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

// Split an Array (arg1) into groups the length of (arg2) and return them as 2D Array
function arrayInGroups(arr, size) {
  let holder = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      holder.push(arr[i]);
    } else {
      holder.push(arr[i]);
      result.push(holder);
      holder = [];
    }
  }
  if (holder.length !== 0) {
    result.push(holder);
  }
  return result;
}
