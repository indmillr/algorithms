// Translate a binary string to English
function binaryAgent(str) {
  let binaryStr = str.split(" ");
  let decimalStr = [];
  // convert each binary into a number, then convert number to a character code
  for (let i = 0; i < binaryStr.length; i++) {
    decimalStr.push(String.fromCharmCode(parseInt(binaryStr[i], 2)));
  }
  // join the string
  return decimalStr.join("");
}
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111",
);
