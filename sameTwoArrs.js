// Look through an array to match Key/Value pairs with another array given as arg

function whatIsInAName(collection, source) {
  const arr = [];

  let propertySrc = Object.keys(source);
  arr = collection.filter((value) =>
    propertySrc.every((property) => source[property] === value[property]),
  );

  return arr;
}

whatIsInAName(
  [
    {
      first: "Romeo",
      last: "Montague",
    },
    {
      first: "Mercutio",
      last: null,
    },
    {
      first: "Tybalt",
      last: "Capulet",
    },
  ],
  { last: "Capulet" },
);
