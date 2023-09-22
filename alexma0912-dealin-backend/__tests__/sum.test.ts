import sum from '../src/sum';

describe('sum', () => {
  it('should return sum of two numbers', () => {
    const result: number = sum(3, 5);
    expect(result).toBe(8);
  });
});
