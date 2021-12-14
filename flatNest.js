// Flatten a Nested Array
function steamrollArray(arr) {
  // iterate through arr contents
  const flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // flatten anything that is an array and push to flatArr
      flatArr.push(...steamrollArray(arr[i]));
    } else {
      // direct copy anything that isn't an array
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
