// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // If the number is divisible by any other number, it's not prime
  }
  return true; // If the number is not divisible by any other number, it's prime
}

