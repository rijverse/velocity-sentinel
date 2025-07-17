// Example: Simple analysis of benchmark results

function compareBenchmarks(resultsA, resultsB) {
  // resultsA and resultsB are arrays of { name, duration }
  return resultsA.map((a, idx) => {
    const b = resultsB[idx];
    return {
      name: a.name,
      durationA: a.duration,
      durationB: b ? b.duration : null,
      faster: b ? (a.duration < b.duration ? 'A' : 'B') : 'A',
      diff: b ? Math.abs(a.duration - b.duration) : null,
    };
  });
}

module.exports = { compareBenchmarks };
