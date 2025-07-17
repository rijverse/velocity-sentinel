const { performance } = require('perf_hooks');
const { fibonacci } = require('../utils');

describe('Fibonacci Benchmark', () => {
  test('benchmark fibonacci calculations with memoization stress test', () => {
    const start = performance.now();
    const fibNumbers = [10, 15, 20, 25, 30];
    let totalCalculations = 0;
    for (let num of fibNumbers) {
      for (let i = 0; i < 50; i++) {
        fibonacci(num);
        totalCalculations++;
      }
    }
    const end = performance.now();
    const duration = end - start;
    console.log(
      `Fibonacci benchmark took ${duration.toFixed(2)}ms for ${totalCalculations} calculations`
    );
    expect(totalCalculations).toBe(250);
    expect(duration).toBeLessThan(10000);
  });
});
