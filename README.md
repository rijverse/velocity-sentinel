# ⚡ Velocity Sentinel

A comprehensive CI/CD performance monitoring toolkit designed to detect workflow regressions and optimize GitHub Actions execution times through intensive benchmarking.

## Overview

Velocity Sentinel is a specialized performance testing framework that stress-tests your CI/CD pipeline with computationally intensive benchmarks. By running demanding workloads across mathematical computations, memory operations, and async processing, it establishes baseline performance metrics and automatically detects regressions in your GitHub Actions workflows.

The toolkit combines heavy dependency installations with CPU-intensive test suites to create realistic load scenarios that mirror complex production environments. This approach ensures your CI/CD pipeline can handle demanding workloads while maintaining consistent performance standards.

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
npm install

# Run local tests
npm test

# Run with coverage
npm run test:coverage

# Verbose output
npm run test:verbose
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
| Dependencies | 90s | Installation efficiency |
| Test Execution | 45s | Core test performance |
| Benchmarks | 30s | Algorithm performance |
| Coverage | 60s | Coverage collection impact |
| Total Workflow | 180s | Overall pipeline efficiency |

## Test Categories

### Unit Tests
- Basic mathematical operations (add, multiply)
- Input validation and edge cases
- Error handling verification

### Performance Benchmarks
- **Factorial Calculations**: Recursive algorithm timing with 1,500+ operations
- **Prime Detection**: Optimized sieve implementation testing 50,000+ numbers
- **Array Operations**: Multi-dataset sorting efficiency (1K-10K elements)
- **Async Operations**: Concurrent promise resolution (225+ operations)
- **String Processing**: Regex and manipulation on large text datasets
- **Memory Operations**: Complex object creation and processing
- **Mathematical Computations**: Matrix operations and statistical analysis

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
MAX_INSTALL_TIME=90     # Dependency installation
MAX_TEST_TIME=45        # Test execution
MAX_PERF_TIME=30        # Performance benchmarks
MAX_COVERAGE_TIME=60    # Coverage analysis
MAX_TOTAL_TIME=180      # Total workflow
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
| Dependencies Install | 67s |
| Test Execution | 28s |
| Performance Benchmarks | 18s |
| Coverage Analysis | 35s |
| Total Workflow Time | 148s |
```

### Performance Comparison
PR workflows show performance delta:

```
🔄 Performance Comparison
| Branch | Duration | Change |
|--------|----------|---------|
| Main | 25s | - |
| PR | 18s | -7s |

🚀 Performance improvement detected!
The PR is 7s faster than main branch.
```