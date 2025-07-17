const { performance } = require('perf_hooks');
const { sortArray } = require('../utils');

describe('Sorting Benchmark', () => {
  test('benchmark array sorting with multiple large datasets', () => {
    const start = performance.now();
    const testSizes = [10000, 25000, 50000, 75000];
    let totalSorted = 0;
    for (let size of testSizes) {
      for (let iteration = 0; iteration < 100; iteration++) {
        const arr = Array.from({ length: size }, () =>
          Math.floor(Math.random() * size)
        );
        const sorted = sortArray(arr);
        totalSorted += sorted.length;
        if (iteration < 3) {
          for (let i = 0; i < sorted.length - 1; i++) {
            expect(sorted[i]).toBeLessThanOrEqual(sorted[i + 1]);
          }
        }
      }
    }
    const end = performance.now();
    const duration = end - start;
    console.log(
      `Array sorting benchmark took ${duration.toFixed(2)}ms, sorted ${totalSorted} total elements`
    );
    expect(totalSorted).toBe(16000000);
  });
});
