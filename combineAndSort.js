// Combine two or more arrays into a new array in original order, but with no duplicates
function uniteUnique(arr) {
  // create result holder arr
  let newArr = [];
  // iterate through arguments Object since quantity of args is unknown
  for (let i = 0; i < arguments.length; i++) {
    let arrArgs = arguments[i];
    // iterate throught each array
    for (let j = 0; j < arrArgs.length; j++) {
      let indexVal = arrArgs[j];
      // is the value already on the array??
      if (newArr.indexOf(indexVal) < 0) {
        newArr.push(indexVal);
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
