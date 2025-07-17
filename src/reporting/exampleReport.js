// Example: Simple text report generator for benchmark results

function generateReport(results) {
  let report = 'Benchmark Report\n';
  report += '================\n';
  results.forEach(r => {
    report += `${r.name}: ${r.duration.toFixed(2)}ms\n`;
  });
  return report;
}

module.exports = { generateReport };
