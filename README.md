# ⚡ Velocity Sentinel

A comprehensive GitHub Actions runner performance benchmarking suite designed to evaluate and compare the execution characteristics of different runner environments including GitHub-hosted, self-hosted, and third-party runners.

## Overview

Velocity Sentinel provides standardized performance benchmarks to help teams make informed decisions about their CI/CD infrastructure. By running identical workloads across different runner types, it reveals performance differences, cost implications, and reliability patterns that impact development workflows.

The suite combines intensive computational benchmarks with realistic dependency installation scenarios to simulate real-world CI/CD workloads. This approach ensures meaningful performance comparisons across runner environments while identifying bottlenecks and optimization opportunities.

## Runner Types Supported

### 🏢 GitHub-Hosted Runners
- **Standard runners**: `ubuntu-latest`, `windows-latest`, `macos-latest`
- **Larger runners**: `ubuntu-latest-4-cores`, `ubuntu-latest-8-cores`, `ubuntu-latest-16-cores`
- **GPU runners**: `gpu-ubuntu-latest` (where available)

### 🔧 Self-Hosted Runners
- Custom hardware configurations
- On-premises infrastructure
- Cloud-based self-hosted setups
- Containerized runner environments

### 🌐 Third-Party Runners
- BuildJet runners
- Namespace runners
- Cirrus CI runners
- Custom runner implementations

## Features

### 📊 Comprehensive Performance Metrics
- **Installation Timing**: Measures dependency installation across different package managers
- **CPU Benchmarks**: Mathematical computations, sorting algorithms, prime calculations
- **Memory Tests**: Large object manipulation and memory allocation patterns
- **I/O Performance**: File operations, network requests, and disk usage
- **Concurrent Processing**: Multi-threaded operations and async workload handling

### 🔍 Runner Comparison Analysis
- **Side-by-side Performance**: Direct comparison between runner types
- **Cost-Performance Ratio**: Execution time vs. runner costs analysis
- **Reliability Metrics**: Success rates and failure patterns
- **Resource Utilization**: CPU, memory, and disk usage patterns
- **Network Performance**: Download speeds and connectivity reliability

### 📈 Automated Reporting
- **Performance Dashboards**: Visual comparison of runner performance
- **Trend Analysis**: Historical performance tracking over time
- **Regression Detection**: Automatic alerts for performance degradation
- **Cost Analysis**: Runner usage costs and optimization recommendations

## Quick Start

### Minimal Example

Run a simple benchmark locally and see the output:

```bash
yarn test:performance
```

Expected output (example):
```
PASS  src/performance.test.js
  Performance Benchmarks
    ✓ benchmark factorial calculations (X ms)
    ✓ benchmark prime checking with large dataset (Y ms)
    ...
```

### Basic Runner Testing

```bash
# Clone the repository
git clone https://github.com/yourusername/velocity-sentinel.git
cd velocity-sentinel

# Install dependencies (this is part of the benchmark)
yarn install

# Run local performance tests
yarn test

# Run comprehensive benchmarks
yarn test:performance

# Generate detailed reports
yarn test:coverage
```

### Testing Specific Runners

```bash
# Test on GitHub-hosted runners
gh workflow run runner-comparison.yml -f runner_type=github-hosted

# Test on larger GitHub runners
gh workflow run runner-comparison.yml -f runner_type=github-large

# Test on self-hosted runners
gh workflow run runner-comparison.yml -f runner_type=self-hosted

# Compare multiple runner types
gh workflow run comprehensive-comparison.yml
```

## Benchmark Categories

### 🔧 Infrastructure Benchmarks
- **Dependency Installation**: yarn, pnpm installation timing with 80+ packages
- **Container Operations**: Docker build and push operations
- **File System Performance**: Large file creation, compression, and extraction
- **Network Throughput**: Download speeds and API response times

### 💻 Computational Benchmarks
- **Mathematical Operations**: 1,500+ factorial calculations, prime number detection
- **Sorting Algorithms**: Multi-dataset sorting (1K-10K elements)
- **String Processing**: Regex operations on large text datasets
- **Memory Operations**: Complex object creation and manipulation (1,000+ objects)
- **Async Processing**: 225+ concurrent promise operations

### 🧪 Real-World Scenarios
- **Build Processes**: TypeScript compilation, webpack bundling
- **Test Execution**: Jest test suites with coverage analysis
- **Code Quality**: ESLint, Prettier, and type checking
- **Database Operations**: Migration scripts and data processing

## Workflow Configuration

### Runner Comparison Workflow
```yaml
# .github/workflows/runner-comparison.yml
# Runs identical benchmarks across different runner types
# Provides direct performance comparison metrics
```

### Comprehensive Analysis Workflow
```yaml
# .github/workflows/comprehensive-analysis.yml
# Matrix strategy testing across all available runners
# Generates detailed performance reports and cost analysis
```

### Scheduled Performance Monitoring
```yaml
# .github/workflows/scheduled-monitoring.yml
# Daily/weekly performance tracking
# Trend analysis and regression detection
```

## Performance Thresholds by Runner Type

| Runner Type | Dependencies | Tests | Benchmarks | Total |
|-------------|--------------|-------|------------|-------|
| GitHub Standard | 120s | 60s | 45s | 240s |
| GitHub Large (4-core) | 80s | 40s | 30s | 180s |
| GitHub Large (8-core) | 60s | 30s | 25s | 150s |
| Self-Hosted (Custom) | Variable | Variable | Variable | Variable |
| Third-Party | 90s | 45s | 35s | 200s |

## Runner Performance Analysis

### Interpreting Results

```
🏃‍♂️ Runner Performance Comparison
| Runner Type | Total Time | Cost/Min | Performance Score |
|-------------|------------|----------|-------------------|
| GitHub Standard | 240s | $0.008 | 100 |
| GitHub 4-core | 180s | $0.016 | 133 |
| GitHub 8-core | 150s | $0.032 | 160 |
| Self-Hosted | 120s | $0.005 | 200 |
| BuildJet | 160s | $0.012 | 150 |
```

### Cost-Performance Analysis
- **Performance Score**: Baseline (GitHub Standard) = 100
- **Cost Efficiency**: Performance improvement per dollar spent
- **Reliability Factor**: Success rate and consistency metrics
- **Recommendation Engine**: Optimal runner selection based on workload

## Configuration

### Custom Runner Testing

```yaml
# .github/workflows/custom-runner-test.yml
name: Custom Runner Test
on:
  workflow_dispatch:
    inputs:
      runner_label:
        description: 'Runner label to test'
        required: true
        default: 'ubuntu-latest'

jobs:
  benchmark:
    runs-on: ${{ github.event.inputs.runner_label }}
    # ... benchmark steps
```

### Adding New Benchmarks

```javascript
// src/benchmarks/custom-benchmark.js
const { performance } = require('perf_hooks');

function customBenchmark() {
  const start = performance.now();
  
  // Your custom benchmark logic
  performCustomOperation();
  
  const end = performance.now();
  const duration = end - start;
  
  return {
    name: 'Custom Benchmark',
    duration: duration,
    operations: operationCount,
    throughput: operationCount / (duration / 1000)
  };
}

module.exports = { customBenchmark };
```

### Runner-Specific Configurations

```javascript
// config/runner-configs.js
const runnerConfigs = {
  'github-standard': {
    expectedPerformance: 100,
    costPerMinute: 0.008,
    maxDuration: 240
  },
  'github-4-core': {
    expectedPerformance: 133,
    costPerMinute: 0.016,
    maxDuration: 180
  },
  'self-hosted': {
    expectedPerformance: 'variable',
    costPerMinute: 'custom',
    maxDuration: 'unlimited'
  }
};
```

## Architecture

```
velocity-sentinel/
├── src/
│   ├── benchmarks/           # Individual benchmark implementations (planned)
│   ├── runners/              # Runner-specific configurations (planned)
│   ├── analysis/             # Performance analysis tools (planned)
│   └── reporting/            # Report generation utilities (planned)
├── .github/workflows/
│   ├── runner-comparison.yml      # Single runner testing
│   ├── comprehensive-analysis.yml # Multi-runner comparison
│   ├── scheduled-monitoring.yml   # Automated monitoring
│   └── cost-analysis.yml          # Cost optimization analysis
├── config/
│   └── runner-configs.js    # Runner specifications
```

> **Note:** Some directories (benchmarks, runners, analysis, reporting) are planned for future expansion and may not yet be implemented in the current version.

## Dependency Policy

This project aims to keep dependencies minimal and only include those required for benchmarking, testing, and CI/CD automation. If you add a new dependency, please ensure it is essential and document its use in the codebase or pull request.

## Roadmap

- [x] Core performance benchmarks (CPU, memory, async, I/O)
- [x] GitHub Actions workflows for runner comparison
- [ ] Modularize benchmarks into `src/benchmarks/`
- [ ] Add runner-specific logic in `src/runners/`
- [ ] Implement analysis and reporting modules
- [ ] Add more real-world CI/CD scenarios
- [ ] Community-contributed benchmarks

## Contributing

Contributions are welcome! To get started:

1. Fork the repository and create a new branch.
2. Add your benchmark, utility, or improvement.
3. Add or update tests as needed.
4. Open a pull request with a clear description of your changes.

Please follow the code style and keep dependencies minimal. For major changes, open an issue first to discuss your proposal.

## Use Cases

### 🏢 Enterprise Teams
- **Runner Selection**: Choose optimal runners for different project types
- **Cost Optimization**: Balance performance needs with budget constraints
- **Capacity Planning**: Understand resource requirements for scaling

### 🚀 Open Source Projects
- **Public Runner Efficiency**: Maximize free GitHub Actions minutes
- **Community Contributions**: Provide runner performance data to maintainers
- **Resource Optimization**: Efficient use of donated compute resources

### 🔬 DevOps Research
- **Performance Studies**: Academic research on CI/CD infrastructure
- **Benchmarking Standards**: Establish industry performance baselines
- **Tool Evaluation**: Compare different CI/CD platforms and runners

## Contributing

We welcome contributions that expand runner support and improve benchmarking accuracy:

### Adding New Runner Types
1. Create runner configuration in `config/runner-configs.js`
2. Add workflow support in `.github/workflows/`
3. Update performance thresholds
4. Document runner-specific considerations

### Improving Benchmarks
1. Ensure benchmarks are deterministic and repeatable
2. Add proper timing measurements and resource monitoring
3. Include runner-specific optimizations where appropriate
4. Validate results across different runner types

### Reporting Enhancements
1. Improve visualization of performance comparisons
2. Add cost analysis features
3. Enhance trend analysis capabilities
4. Expand export formats for integration with other tools

## Best Practices

### Runner Testing Strategy
- **Baseline Establishment**: Always test against GitHub-hosted runners first
- **Multiple Runs**: Execute benchmarks multiple times for statistical significance
- **Load Variation**: Test under different load conditions and times of day
- **Version Consistency**: Use consistent tool versions across runner types

### Performance Analysis
- **Relative Comparison**: Focus on relative performance rather than absolute numbers
- **Cost Consideration**: Factor in runner costs when evaluating performance
- **Workload Relevance**: Ensure benchmarks match your actual CI/CD workloads
- **Regular Monitoring**: Track performance trends over time