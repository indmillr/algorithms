const theRomans = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function convertToRoman(num) {
  if (num === 0) {
    return "";
  }
  for (let i = 0; i < theRomans.length; i++) {
    if (num >= theRomans[i][0]) {
      return theRomans[i][1] + convertToRoman(num - theRomans[i][0]);
    }
  }
}
