// Example: Custom runner detection logic

function detectRunner() {
  if (process.env.GITHUB_ACTIONS) {
    return 'github';
  }
  if (process.env.CI && process.env.BUILDKITE) {
    return 'buildkite';
  }
  if (process.env.CI && process.env.CIRCLECI) {
    return 'circleci';
  }
  if (process.env.CI && process.env.GITLAB_CI) {
    return 'gitlab';
  }
  if (process.env.CI && process.env.TRAVIS) {
    return 'travis';
  }
  return 'unknown';
}

module.exports = { detectRunner };
