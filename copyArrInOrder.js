// Copy each element of an array into another array, in order
function spliceArr(arr1, arr2, n) {
  let copyArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    copyArr.splice(n, 0, arr1[i]);
    n++;
  }
  return copyArr;
}
