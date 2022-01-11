// Sum two arguments together
function addTogether() {
  const [x, y] = arguments;

  if (typeof x !== "number") return undefined;
  if (y === undefined) return (y) => addTogether(x, y);
  if (typeof y !== "number") return undefined;
  return x + y;
}

addTogether(2, 3);
