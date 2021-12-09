// Provide an initial array. Args will search that array and remove all elements that match args

function finAndRemove(arr) {
  // create an array of what needs to be removed
  let removeItems = Object.values(arguments).slice(1);
  for (let i = 0; i < arr.length; i++) {
    // iterate through the items to be removed
    for (let j = 0; j < removeItems.length; j++) {
      if (arr[i] === removeItems[j]) {
        // if the in removeItems matches current index of arr, delete it
        delete arr[i];
      }
    }
  }
  // return arr, but remove any 'null'
  return arr.filter((item) => item != null);
}

findAndRemove([1, 2, 3, 1, 2, 3], 2, 3);
