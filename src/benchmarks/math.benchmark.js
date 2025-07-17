const { performance } = require('perf_hooks');

describe('Math Computation Benchmark', () => {
  test('benchmark mathematical computations with complex algorithms', () => {
    const start = performance.now();
    let computationCount = 0;
    const matrixSize = 200;
    for (let iteration = 0; iteration < 100; iteration++) {
      const matrixA = Array.from({ length: matrixSize }, () =>
        Array.from({ length: matrixSize }, () => Math.random())
      );
      const matrixB = Array.from({ length: matrixSize }, () =>
        Array.from({ length: matrixSize }, () => Math.random())
      );
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
    const dataset = Array.from({ length: 1000000 }, () => Math.random() * 1000);
    const mean = dataset.reduce((sum, val) => sum + val, 0) / dataset.length;
    const variance =
      dataset.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) /
      dataset.length;
    const stdDev = Math.sqrt(variance);
    const sorted = [...dataset].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    computationCount += dataset.length * 3;
    const end = performance.now();
    const duration = end - start;
    console.log(
      `Mathematical computations benchmark took ${duration.toFixed(2)}ms for ${computationCount} operations`
    );
    console.log(
      `Statistics: mean=${mean.toFixed(2)}, median=${median.toFixed(2)}, stdDev=${stdDev.toFixed(2)}`
    );
    expect(computationCount).toBeGreaterThan(2500000);
  });
});
