const {
  add,
  multiply,
  factorial,
  isPrime,
  fibonacci,
  sortArray,
  asyncOperation,
} = require('./utils');

describe('Basic Math Operations', () => {
  test('add function', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('multiply function', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });
});

describe('Advanced Math Operations', () => {
  test('factorial function', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  test('isPrime function', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(25)).toBe(false);
    expect(isPrime(97)).toBe(true);
  });

  test('fibonacci function', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });
});

describe('Array Operations', () => {
  test('sortArray function', () => {
    expect(sortArray([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
    expect(sortArray([100, 2, 50])).toEqual([2, 50, 100]);
    expect(sortArray([])).toEqual([]);
    expect(sortArray([1])).toEqual([1]);
  });
});

describe('Async Operations', () => {
  test('asyncOperation function', async () => {
    const result = await asyncOperation(50);
    expect(result).toBe('completed');
  });

  test('asyncOperation with different delays', async () => {
    const start = Date.now();
    await asyncOperation(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(95);
  });
});

describe('Performance Tests', () => {
  test('large factorial calculation', () => {
    const result = factorial(15);
    expect(result).toBe(1307674368000);
  });

  test('prime checking for larger numbers', () => {
    expect(isPrime(1009)).toBe(true);
    expect(isPrime(1013)).toBe(true);
    expect(isPrime(1000)).toBe(false);
  });

  test('sorting large array', () => {
    const largeArray = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000)
    );
    const sorted = sortArray(largeArray);
    expect(sorted).toHaveLength(1000);

    // Check if array is actually sorted
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i]).toBeLessThanOrEqual(sorted[i + 1]);
    }
  });
});
