// Sum all numbers in a range
function sumAll(arr) {
  let num = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    num += i;
  }
  return num;
}

sumAll([1, 4]);
