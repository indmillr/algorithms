// convert Celcius to Fahrenheit
function convertToF(celcius) {
  let fahrenheit = celcius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);

// Reverse a String
function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

reverseString("hello");
