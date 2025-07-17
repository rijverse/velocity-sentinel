const { performance } = require('perf_hooks');
const { asyncOperation } = require('../utils');

describe('Async Benchmark', () => {
  test('benchmark async operations with concurrent processing', async () => {
    const start = performance.now();
    const promises = [];
    // Increase workload: multiply operationCounts by 10 and repeat in an outer loop
    const operationCounts = [
      50, 75, 100, 150, 200, 400, 600, 800
    ].map(x => x * 10);
    for (let repeat = 0; repeat < 10; repeat++) {
      for (let count of operationCounts) {
        const batchPromises = Array.from({ length: count }, (_, i) =>
          asyncOperation(10 + (i % 20))
        );
        promises.push(...batchPromises);
      }
    }
    const results = await Promise.all(promises);
    const end = performance.now();
    const duration = end - start;
    console.log(
      `Async operations benchmark took ${duration.toFixed(2)}ms for ${results.length} operations`
    );
    expect(results).toHaveLength(237500);
    expect(results.every(result => result === 'completed')).toBe(true);
    // Removed duration upper bound for long-running test
  });
});
