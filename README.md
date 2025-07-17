# ⚡ Velocity Sentinel
**Velocity Sentinel** - Vigilant guardian of your CI/CD performance.
A high-performance CI/CD benchmarking suite that monitors workflow execution times and guards against performance regressions in your GitHub Actions.

## Overview

Velocity Sentinel provides comprehensive timing analysis for your GitHub workflows, from dependency installation to test execution and coverage reporting. Built with performance-first principles, it delivers actionable insights into your CI/CD pipeline efficiency.

## Features

### 🔍 Comprehensive Timing Analysis
- **Granular Step Timing**: Measures execution time for each workflow step
- **Performance Thresholds**: Configurable limits with automatic failure on regression
- **Multi-Node Testing**: Matrix strategy across Node.js versions
- **Detailed Reporting**: Rich markdown summaries with timing breakdowns

### 📊 Performance Benchmarking
- **Algorithm Performance**: Factorial, prime checking, and sorting benchmarks
- **Memory Efficiency**: Tracks performance across different data sizes
- **Async Operations**: Timing analysis for asynchronous workflows
- **Regression Detection**: Automatic comparison between branches

### 🛡️ Continuous Monitoring
- **Branch Comparison**: PR performance vs main branch analysis
- **Coverage Integration**: Performance impact of test coverage collection
- **Artifact Management**: Automated upload of performance reports
- **Threshold Enforcement**: Fail-fast on performance degradation

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/velocity-sentinel.git
cd velocity-sentinel

# Install dependencies
yarn

# Run local tests
yarn test

# Run with coverage
yarn test:coverage

# Verbose output
yarn test:verbose
```

## Workflow Configuration

### Main Benchmark Workflow
Triggered on push to `main`/`develop` and pull requests:

```yaml
# .github/workflows/test-benchmark.yml
- Installs dependencies with timing
- Executes full test suite
- Runs performance benchmarks
- Generates coverage reports
- Validates against performance thresholds
```

### Performance Comparison
Activated on pull requests for regression analysis:

```yaml
# .github/workflows/performance-comparison.yml
- Compares PR performance against main branch
- Identifies performance improvements/regressions
- Provides detailed comparison metrics
```

## Performance Thresholds

Default limits (configurable in workflow):

| Operation | Threshold | Purpose |
|-----------|-----------|---------|
| Dependencies | 60s | Installation efficiency |
| Test Execution | 30s | Core test performance |
| Benchmarks | 15s | Algorithm performance |
| Coverage | 45s | Coverage collection impact |
| Total Workflow | 120s | Overall pipeline efficiency |

## Test Categories

### Unit Tests
- Basic mathematical operations (add, multiply)
- Input validation and edge cases
- Error handling verification

### Performance Benchmarks
- **Factorial Calculations**: Recursive algorithm timing
- **Prime Detection**: Optimized sieve implementation
- **Array Operations**: Sorting algorithm efficiency
- **Async Operations**: Promise resolution timing

### Integration Tests
- Large dataset processing
- Memory usage patterns
- Concurrent operation handling

## Customization

### Adding New Benchmarks

```javascript
// src/performance.test.js
test('custom benchmark', () => {
  const start = performance.now();
  
  // Your performance-critical code here
  customOperation();
  
  const end = performance.now();
  const duration = end - start;
  
  console.log(`Custom benchmark: ${duration.toFixed(2)}ms`);
  expect(duration).toBeLessThan(expectedThreshold);
});
```

### Modifying Thresholds

Edit the performance regression check in `.github/workflows/test-benchmark.yml`:

```bash
MAX_INSTALL_TIME=60    # Dependency installation
MAX_TEST_TIME=30       # Test execution
MAX_PERF_TIME=15       # Performance benchmarks
MAX_COVERAGE_TIME=45   # Coverage analysis
MAX_TOTAL_TIME=120     # Total workflow
```

## Architecture

```
velocity-sentinel/
├── src/
│   ├── utils.js              # Core utility functions
│   ├── utils.test.js         # Unit tests
│   └── performance.test.js   # Performance benchmarks
├── .github/workflows/
│   ├── test-benchmark.yml    # Main timing workflow
│   └── performance-comparison.yml  # PR comparison
└── package.json              # Dependencies and scripts
```

## Interpreting Results

### Workflow Summary
Each run generates a detailed timing breakdown:

```
📊 Workflow Timing Summary
| Step | Duration |
|------|----------|
| Dependencies Install | 23s |
| Test Execution | 8s |
| Performance Benchmarks | 4s |
| Coverage Analysis | 12s |
| Total Workflow Time | 47s |
```

### Performance Comparison
PR workflows show performance delta:

```
🔄 Performance Comparison
| Branch | Duration | Change |
|--------|----------|---------|
| Main | 15s | - |
| PR | 12s | -3s |

🚀 Performance improvement detected!
The PR is 3s faster than main branch.
```