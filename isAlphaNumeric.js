function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && !(code > 96 && code < 123)) {
    return false;
  }
  return true;
}
