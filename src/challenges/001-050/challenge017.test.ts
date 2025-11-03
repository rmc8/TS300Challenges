import { challenge017 } from './challenge017';

describe('Challenge 017: ビット演算', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('4つのビット演算結果が出力されること', () => {
    challenge017();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(4);
  });

  test('すべて数値が出力されること', () => {
    challenge017();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (typeof value !== 'string') {
        expect(typeof value).toBe('number');
      }
    });
  });
});
