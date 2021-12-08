// Find the length of the longest word in a string
function findLongestWordLength(str) {
  let words = str.split(" ");
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }
  return max;
}
