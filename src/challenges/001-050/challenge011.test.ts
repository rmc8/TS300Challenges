import { challenge011 } from './challenge011';

describe('Challenge 011: 基本的な算術演算', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('5つの演算結果が出力されること', () => {
    challenge011();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(5);
  });

  test('すべて数値が出力されること', () => {
    challenge011();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (typeof value !== 'string') {
        expect(typeof value).toBe('number');
      }
    });
  });
});
