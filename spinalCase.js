// Convert a String to Spinal Case

function spinalCase(str) {
  // whitespace and underscores
  let regEx = /\s+|_+/g;
  // put a Space before all uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // "-" replaces all whitespace and underscores
  return str.replace(regEx, "-").toLowerCase();
}

spinalCase("This Is Spinal Tap");
