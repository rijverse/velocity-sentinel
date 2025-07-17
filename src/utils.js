// Utility functions for testing
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function fibonacci(n) {
  if (n <= 1) return n;

  // Simple memoization to prevent exponential time complexity
  if (!fibonacci.cache) fibonacci.cache = {};
  if (fibonacci.cache[n]) return fibonacci.cache[n];

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  fibonacci.cache[n] = result;
  return result;
}

function sortArray(arr) {
  return [...arr].sort((a, b) => a - b);
}

async function asyncOperation(delay = 100) {
  return new Promise(resolve => {
    setTimeout(() => resolve('completed'), delay);
  });
}

module.exports = {
  add,
  multiply,
  factorial,
  isPrime,
  fibonacci,
  sortArray,
  asyncOperation,
};
