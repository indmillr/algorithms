// Iterate through an array (arg) and remove elements until function (arg) returns true
function dropElements(arr, func) {
  let num = arr.findIndex(func);
  return arr.slice(num >= 0 ? num : arr.length);
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
