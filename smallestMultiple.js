// Find the smallest common multiple of given parameters

function smallestCommons(arr) {
  const [low, high] = arr.sort((a, b) => a - b);
  const num = high - low + 1;
  // largest possible smallest common multiple
  let max = 1;
  for (let i = low; i <= high; i++) {
    max *= i;
  }
  // check multiples of 'high'
  for (let multiple = high; multiple <= max; multiple += high) {
    // check if everything divides 'multiple'
    let count = 0;
    for (let i = low; i <= high; i++) {
      if (multiple % i === 0) {
        // count the divisors
        count += 1;
      }
    }
    if (count === num) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);
