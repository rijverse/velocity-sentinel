const { performance } = require('perf_hooks');
const { asyncOperation } = require('../utils');

describe('Async Benchmark', () => {
  test('benchmark async operations with concurrent processing', async () => {
    const start = performance.now();
    const promises = [];
    const operationCounts = [50, 75, 100];
    for (let count of operationCounts) {
      const batchPromises = Array.from({ length: count }, (_, i) =>
        asyncOperation(10 + (i % 20))
      );
      promises.push(...batchPromises);
    }
    const results = await Promise.all(promises);
    const end = performance.now();
    const duration = end - start;
    console.log(
      `Async operations benchmark took ${duration.toFixed(2)}ms for ${results.length} operations`
    );
    expect(results).toHaveLength(225);
    expect(results.every(result => result === 'completed')).toBe(true);
    expect(duration).toBeLessThan(2000);
  });
});
