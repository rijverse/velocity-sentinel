# Benchmarks Directory

This directory contains individual benchmark test suites. Each file should focus on a specific type of performance test (e.g., factorial, sorting, async, memory, etc.).

## How to Add a New Benchmark

1. Create a new file named `<your-benchmark>.benchmark.js` in this directory.
2. Use Jest's `describe` and `test` blocks to define your benchmark.
3. Import any utilities you need from `../utils` or other helpers.
4. Keep each benchmark focused and isolated for clarity and maintainability.

Example:
```js
const { performance } = require('perf_hooks');
const { myFunction } = require('../utils');

describe('My Custom Benchmark', () => {
  test('should measure performance of myFunction', () => {
    const start = performance.now();
    // ... run your benchmark ...
    const end = performance.now();
    console.log(`myFunction took ${end - start}ms`);
  });
});
``` 