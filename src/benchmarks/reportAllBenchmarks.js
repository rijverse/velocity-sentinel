const { execSync } = require('child_process');
const { generateReport } = require('../reporting/exampleReport');

// List of benchmark files to run
const benchmarks = [
  'factorial.benchmark.js',
  'prime.benchmark.js',
  'sorting.benchmark.js',
  'fibonacci.benchmark.js',
  'async.benchmark.js',
  'string.benchmark.js',
  'memory.benchmark.js',
  'math.benchmark.js',
];

const results = [];

benchmarks.forEach(file => {
  const output = execSync(`npx jest src/benchmarks/${file} --silent --json`, {
    encoding: 'utf-8',
  });
  const json = JSON.parse(output);
  const testResult = json.testResults[0];
  const duration = testResult.endTime - testResult.startTime;
  results.push({ name: testResult.name.split('/').pop(), duration });
});

const report = generateReport(results);
console.log(report);
