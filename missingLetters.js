// Find the missing letter in the letter range

function fearNotLetter(str) {
  // Loop through the string
  for (let i = 1; i < str.length; i++) {
    // check if charCodes differ by more than 1 between chars
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      // return the missing char
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

fearNotLetter("abce");
