// Split an array (arg1) into groups the length of arg2 and return as 2D array
function arrayGroup(arr, size) {
  let holder = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      holder.push(arr[i]);
    } else {
      holder.push(arr[i]);
      result.push(holder);
      holder = [];
    }
  }
  if (holder.length !== 0) {
    result.push(holder);
  }
  return result;
}
