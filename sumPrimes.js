function sumPrimes(num) {
  // Use isPrime to check if Prime
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  }
  // Check all numbers up to 'num' using isPrime
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

sumPrimes(10);
