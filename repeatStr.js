// Repeat a string
function repeatStrNumTimes(str, num) {
  let repeat = "";
  while (num > 0) {
    repeat += str;
    num--;
  }
  return repeat;
}
