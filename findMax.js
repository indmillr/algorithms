// Return the largest numbers within multiple arrays
function largestOfAll(arr) {
  let newArr = [];
  // iterate through the outer array
  for (let i = 0; i < arr.length; i++) {
    let maxNum = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      // if the number in the inner loop is bigger, update maxNum
      if (arr[i][j] > maxNum) {
        // save that number in the corresponding position in newArr
        maxNum = arr[i][j];
      }
    }
    newArr[i] = maxNum;
  }
  return newArr;
}
