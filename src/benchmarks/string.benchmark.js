const { performance } = require('perf_hooks');

describe('String Manipulation Benchmark', () => {
  test('benchmark string manipulation and regex operations', () => {
    const start = performance.now();
    const baseString = 'The quick brown fox jumps over the lazy dog. ';
    const longText = baseString.repeat(10000);
    let operationCount = 0;
    for (let i = 0; i < 100000; i++) {
      longText.toLowerCase();
      longText.toUpperCase();
      operationCount += 2;
      longText.replace(/fox/g, 'cat');
      longText.replace(/\d+/g, 'NUMBER');
      operationCount += 2;
      const words = longText.split(' ');
      words.join('-');
      operationCount += 2;
      const matches = longText.match(/\b\w{4,}\b/g);
      if (matches) operationCount++;
    }
    const end = performance.now();
    const duration = end - start;
    console.log(
      `String manipulation benchmark took ${duration.toFixed(2)}ms for ${operationCount} operations`
    );
    expect(operationCount).toBeGreaterThan(600);
  });
});
