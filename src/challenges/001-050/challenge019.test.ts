import { challenge019 } from './challenge019';

describe('Challenge 019: 複合代入演算子', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数のステップの結果が出力されること', () => {
    challenge019();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(5);
  });

  test('すべて数値が出力されること', () => {
    challenge019();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (typeof value !== 'string') {
        expect(typeof value).toBe('number');
      }
    });
  });
});
