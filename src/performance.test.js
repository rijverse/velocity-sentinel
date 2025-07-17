describe('Performance Benchmarks', () => {
  const { performance } = require('perf_hooks');

  // Modularized benchmarks are now in src/benchmarks/*.benchmark.js
  // This file imports them to keep the test suite unified.
  require('./benchmarks/factorial.benchmark');
  require('./benchmarks/prime.benchmark');
  require('./benchmarks/sorting.benchmark');
  require('./benchmarks/fibonacci.benchmark');
  require('./benchmarks/async.benchmark');
  require('./benchmarks/string.benchmark');
  require('./benchmarks/memory.benchmark');
  require('./benchmarks/math.benchmark');
});
