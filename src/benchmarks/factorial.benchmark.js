const { performance } = require('perf_hooks');
const { factorial } = require('../utils');

describe('Factorial Benchmark', () => {
  test('benchmark factorial calculations', () => {
    const start = performance.now();
    for (let i = 1; i <= 5000; i++) {
      for (let j = 0; j < 1000; j++) {
        factorial(i);
      }
    }
    const end = performance.now();
    const duration = end - start;
    console.log(`Factorial benchmark took ${duration.toFixed(2)}ms`);
  });
});
