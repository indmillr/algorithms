// Compare two arrays. Return a new arr containing only items found in one of the arrays.
// Find the symmetric difference between the two arrays
function diffArray(arr1, arr2) {
  let newArr = [];
  function justInOne(first, second) {
    // Loop through to find non-matching items
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Push non-matching items to newArr
        newArr.push(first[i]);
      }
    }
  }
  justInOne(arr1, arr2);
  justInOne(arr2, arr1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
