// Check if arg2 is truthy against arg1
function truthCheck(collection, pre) {
  // count how many are true
  let count = 0;
  // check each object
  for (let item in collection) {
    // look for existing value and if truthy
    if (
      collection[item].hasOwnProperty(pre) &&
      Boolean(collection[item][pre])
    ) {
      count++;
    }
  }
  // true for all objects??
  return count == collection.length;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex",
);
