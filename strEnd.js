// Confirm the ending of a string
function confirmEnd(str, target) {
  // remove excess length of str that doesn't match target, then compare
  return str.slice(str.length - target.length);
}
