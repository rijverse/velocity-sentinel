const { performance } = require('perf_hooks');
const { isPrime } = require('../utils');

describe('Prime Benchmark', () => {
  test('benchmark prime checking with large dataset', () => {
    const start = performance.now();
    let totalPrimes = 0;
    for (let iteration = 0; iteration < 5; iteration++) {
      let primeCount = 0;
      for (let i = 2; i <= 10000; i++) {
        if (isPrime(i)) {
          primeCount++;
        }
      }
      totalPrimes += primeCount;
    }
    const end = performance.now();
    const duration = end - start;
    console.log(
      `Prime checking benchmark took ${duration.toFixed(2)}ms, found ${totalPrimes} total primes across iterations`
    );
    expect(totalPrimes).toBe(6145);
    expect(duration).toBeLessThan(5000);
  });
});
