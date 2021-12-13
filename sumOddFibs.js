// Sum all Odd Fibonacci Nums <= num
function sumFibs(num) {
  // Variables to keep track
  let preNum = 0;
  let nowNum = 1;
  let result = 0;
  // Make sure to stop at 'num'
  while (nowNum <= num) {
    // if it's Odd, add it to result
    if (nowNum % 2 !== 0) {
      result += nowNum;
    }
    // Fibonacci circle
    nowNum += preNum;
    preNum = nowNum - preNum;
  }
  return result;
}

sumFibs(4);
