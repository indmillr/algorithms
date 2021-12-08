// Return the string with the 1st letter of each word capitalized
function titleCase(str) {
  let strArr = str.toLowerCase().split(" ");
  let newStr = strArr.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return newStr.join(" ");
}
