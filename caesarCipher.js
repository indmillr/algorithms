function rot13(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let addChar = str[i];
    if (addChar.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90)
        addChar = String.fromCharCode(((code - 65 + 13) % 26) + 65);
      else if (code >= 97 && code <= 122)
        addChar = String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }
    newStr += addChar;
  }

  return newStr;
}
