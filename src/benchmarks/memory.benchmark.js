const { performance } = require('perf_hooks');

describe('Memory Benchmark', () => {
  test('benchmark memory-intensive object operations', () => {
    const start = performance.now();
    const objects = [];
    const iterations = 1000;
    for (let i = 0; i < iterations; i++) {
      const obj = {
        id: i,
        name: `Object_${i}`,
        data: Array.from({ length: 1000 }, (_, j) => ({
          index: j,
          value: Math.random() * 1000,
          timestamp: Date.now(),
          metadata: {
            processed: false,
            priority: j % 5,
            tags: [`tag_${j % 10}`, `category_${j % 3}`],
          },
        })),
      };
      obj.data.forEach(item => {
        item.processed = true;
        item.computedValue = item.value * 2 + item.priority;
      });
      const highPriority = obj.data.filter(item => item.priority >= 3);
      highPriority.sort((a, b) => b.computedValue - a.computedValue);
      objects.push({
        ...obj,
        summary: {
          totalItems: obj.data.length,
          highPriorityCount: highPriority.length,
          averageValue:
            obj.data.reduce((sum, item) => sum + item.value, 0) /
            obj.data.length,
        },
      });
    }
    const processedObjects = objects
      .map(obj => ({
        id: obj.id,
        name: obj.name,
        summary: obj.summary,
        score: obj.summary.averageValue * obj.summary.highPriorityCount,
      }))
      .sort((a, b) => b.score - a.score);
    const end = performance.now();
    const duration = end - start;
    console.log(
      `Memory-intensive operations benchmark took ${duration.toFixed(2)}ms, processed ${objects.length} objects, ${processedObjects.length} high-scoring`
    );
    expect(objects).toHaveLength(iterations);
    expect(processedObjects.length).toBeGreaterThan(0);
  });
});
