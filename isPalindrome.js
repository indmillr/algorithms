function palindrome(str) {
  const newStr = str.toLowerCase().match(/[a-z0-9]/g);
  return newStr.join("") === newStr.reverse().join("");
}
