describe('Performance Benchmarks', () => {
  const { performance } = require('perf_hooks');

  test('benchmark factorial calculations', () => {
    const { factorial } = require('./utils');

    const start = performance.now();

    // Run multiple factorial calculations with larger numbers
    for (let i = 1; i <= 15; i++) {
      for (let j = 0; j < 100; j++) {
        factorial(i);
      }
    }

    const end = performance.now();
    const duration = end - start;

    console.log(`Factorial benchmark took ${duration.toFixed(2)}ms`);
    expect(duration).toBeLessThan(2000); // Should complete within 2 seconds
  });

  test('benchmark prime checking with large dataset', () => {
    const { isPrime } = require('./utils');

    const start = performance.now();

    // Check primes up to 10,000 multiple times
    let totalPrimes = 0;
    for (let iteration = 0; iteration < 5; iteration++) {
      let primeCount = 0;
      for (let i = 2; i <= 10000; i++) {
        if (isPrime(i)) {
          primeCount++;
        }
      }
      totalPrimes += primeCount;
    }

    const end = performance.now();
    const duration = end - start;

    console.log(`Prime checking benchmark took ${duration.toFixed(2)}ms, found ${totalPrimes} total primes across iterations`);
    expect(totalPrimes).toBe(6145); // 1229 primes below 10,000 * 5 iterations
    expect(duration).toBeLessThan(5000); // Should complete within 5 seconds
  });

  test('benchmark array sorting with multiple large datasets', () => {
    const { sortArray } = require('./utils');

    const start = performance.now();

    // Sort multiple arrays of different sizes multiple times
    const testSizes = [1000, 2500, 5000, 7500, 10000];
    let totalSorted = 0;

    for (let size of testSizes) {
      for (let iteration = 0; iteration < 10; iteration++) {
        const arr = Array.from({ length: size }, () => Math.floor(Math.random() * size));
        const sorted = sortArray(arr);
        totalSorted += sorted.length;

        // Verify sorting correctness for first few iterations
        if (iteration < 3) {
          for (let i = 0; i < sorted.length - 1; i++) {
            expect(sorted[i]).toBeLessThanOrEqual(sorted[i + 1]);
          }
        }
      }
    }

    const end = performance.now();
    const duration = end - start;

    console.log(`Array sorting benchmark took ${duration.toFixed(2)}ms, sorted ${totalSorted} total elements`);
    expect(totalSorted).toBe(260000); // Sum of all array sizes * 10 iterations
    expect(duration).toBeLessThan(3000); // Should complete within 3 seconds
  });

  test('benchmark fibonacci calculations with memoization stress test', () => {
    const { fibonacci } = require('./utils');

    const start = performance.now();

    // Calculate fibonacci for multiple numbers repeatedly
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

    console.log(`Fibonacci benchmark took ${duration.toFixed(2)}ms for ${totalCalculations} calculations`);
    expect(totalCalculations).toBe(250);
    expect(duration).toBeLessThan(10000); // Should complete within 10 seconds
  });

  test('benchmark async operations with concurrent processing', async () => {
    const { asyncOperation } = require('./utils');

    const start = performance.now();

    // Run multiple concurrent async operations
    const promises = [];
    const operationCounts = [50, 75, 100];

    for (let count of operationCounts) {
      const batchPromises = Array.from({ length: count }, (_, i) =>
          asyncOperation(10 + (i % 20)) // Varying delays from 10-30ms
      );
      promises.push(...batchPromises);
    }

    const results = await Promise.all(promises);

    const end = performance.now();
    const duration = end - start;

    console.log(`Async operations benchmark took ${duration.toFixed(2)}ms for ${results.length} operations`);
    expect(results).toHaveLength(225); // 50 + 75 + 100
    expect(results.every(result => result === 'completed')).toBe(true);
    expect(duration).toBeLessThan(2000); // Should complete within 2 seconds due to concurrency
  });

  test('benchmark string manipulation and regex operations', () => {
    const start = performance.now();

    // Generate test data
    const baseString = 'The quick brown fox jumps over the lazy dog. ';
    const longText = baseString.repeat(1000); // ~43,000 characters

    let operationCount = 0;

    // String operations
    for (let i = 0; i < 100; i++) {
      // Case conversions
      longText.toLowerCase();
      longText.toUpperCase();
      operationCount += 2;

      // String replacements
      longText.replace(/fox/g, 'cat');
      longText.replace(/\d+/g, 'NUMBER');
      operationCount += 2;

      // String splitting and joining
      const words = longText.split(' ');
      words.join('-');
      operationCount += 2;

      // Regex matching
      const matches = longText.match(/\b\w{4,}\b/g);
      if (matches) operationCount++;
    }

    const end = performance.now();
    const duration = end - start;

    console.log(`String manipulation benchmark took ${duration.toFixed(2)}ms for ${operationCount} operations`);
    expect(operationCount).toBeGreaterThan(600);
    expect(duration).toBeLessThan(3000); // Should complete within 3 seconds
  });

  test('benchmark memory-intensive object operations', () => {
    const start = performance.now();

    // Create and manipulate large objects
    const objects = [];
    const iterations = 1000;

    // Object creation and manipulation
    for (let i = 0; i < iterations; i++) {
      const obj = {
        id: i,
        name: `Object_${i}`,
        data: Array.from({ length: 100 }, (_, j) => ({
          index: j,
          value: Math.random() * 1000,
          timestamp: Date.now(),
          metadata: {
            processed: false,
            priority: j % 5,
            tags: [`tag_${j % 10}`, `category_${j % 3}`]
          }
        }))
      };

      // Process the object
      obj.data.forEach(item => {
        item.processed = true;
        item.computedValue = item.value * 2 + item.priority;
      });

      // Filter and sort operations
      const highPriority = obj.data.filter(item => item.priority >= 3);
      highPriority.sort((a, b) => b.computedValue - a.computedValue);

      objects.push({
        ...obj,
        summary: {
          totalItems: obj.data.length,
          highPriorityCount: highPriority.length,
          averageValue: obj.data.reduce((sum, item) => sum + item.value, 0) / obj.data.length
        }
      });
    }

    // Additional processing on the collected objects
    const processedObjects = objects.map(obj => ({
      id: obj.id,
      name: obj.name,
      summary: obj.summary,
      score: obj.summary.averageValue * obj.summary.highPriorityCount
    })).sort((a, b) => b.score - a.score);

    const end = performance.now();
    const duration = end - start;

    console.log(`Memory-intensive operations benchmark took ${duration.toFixed(2)}ms, processed ${objects.length} objects, ${processedObjects.length} high-scoring`);
    expect(objects).toHaveLength(iterations);
    expect(processedObjects.length).toBeGreaterThan(0);
    expect(duration).toBeLessThan(5000); // Should complete within 5 seconds
  });

  test('benchmark mathematical computations with complex algorithms', () => {
    const start = performance.now();

    let computationCount = 0;

    // Matrix multiplication simulation
    const matrixSize = 50;
    for (let iteration = 0; iteration < 20; iteration++) {
      const matrixA = Array.from({ length: matrixSize }, () =>
          Array.from({ length: matrixSize }, () => Math.random())
      );
      const matrixB = Array.from({ length: matrixSize }, () =>
          Array.from({ length: matrixSize }, () => Math.random())
      );

      // Simulate matrix multiplication
      const result = Array.from({ length: matrixSize }, () =>
          Array.from({ length: matrixSize }, () => 0)
      );

      for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
          for (let k = 0; k < matrixSize; k++) {
            result[i][j] += matrixA[i][k] * matrixB[k][j];
            computationCount++;
          }
        }
      }
    }

    // Statistical calculations
    const dataset = Array.from({ length: 10000 }, () => Math.random() * 1000);

    // Calculate various statistics
    const mean = dataset.reduce((sum, val) => sum + val, 0) / dataset.length;
    const variance = dataset.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / dataset.length;
    const stdDev = Math.sqrt(variance);

    // Sorting for median
    const sorted = [...dataset].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];

    computationCount += dataset.length * 3; // For mean, variance, and sorting operations

    const end = performance.now();
    const duration = end - start;

    console.log(`Mathematical computations benchmark took ${duration.toFixed(2)}ms for ${computationCount} operations`);
    console.log(`Statistics: mean=${mean.toFixed(2)}, median=${median.toFixed(2)}, stdDev=${stdDev.toFixed(2)}`);
    expect(computationCount).toBeGreaterThan(2500000); // Matrix ops + statistical ops
    expect(duration).toBeLessThan(8000); // Should complete within 8 seconds
  });
});