function myReplace(str, before, after) {
  // find the location of 'before' within 'str'
  let index = str.indexOf(before);
  // if 1st letter of 'before' is upperCase, change 1st letter of 'after' to upperCase
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // make sure 1st letter of 'after' is lowerCase, if not
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
