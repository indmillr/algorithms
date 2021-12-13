// Sum all Odd Fibonacci Nums <= num
function sumFibs(num) {
  let preNum = 0;
  let nowNum = 1;
  let result = 0;
  while (nowNum <= num) {
    if (nowNum % 2 !== 0) {
      result += nowNum;
    }
    nowNum += preNum;
    preNum = nowNum - preNum;
  }
  return result;
}

sumFibs(4);
