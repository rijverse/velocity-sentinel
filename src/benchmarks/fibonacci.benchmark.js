const { performance } = require('perf_hooks');
const { fibonacci } = require('../utils');

describe('Fibonacci Benchmark', () => {
  test('benchmark fibonacci calculations with memoization stress test', () => {
    const start = performance.now();
    const fibNumbers = [
      10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
    ];
    let totalCalculations = 0;
    for (let num of fibNumbers) {
      for (let i = 0; i < 5000; i++) {
        fibonacci(num);
        totalCalculations++;
      }
    }
    const end = performance.now();
    const duration = end - start;
    console.log(
      `Fibonacci benchmark took ${duration.toFixed(2)}ms for ${totalCalculations} calculations`
    );
    expect(totalCalculations).toBe(85000);
  });
});
