function pairElement(str) {
  // create an Object to use for looking up pairs
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  // split 'str' into an array of characters
  let arr = str.split("");
  // map character to 'arr' and matching pair
  return arr.map((item) => [item, pairs[item]]);
}

pairElement("GCG");
