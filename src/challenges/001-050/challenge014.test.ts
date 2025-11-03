import { challenge014 } from './challenge014';

describe('Challenge 014: 数値の丸め処理', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('3つの丸め処理結果が出力されること', () => {
    challenge014();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
  });

  test('出力される値が整数であること', () => {
    challenge014();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (typeof value === 'number') {
        expect(Number.isInteger(value)).toBe(true);
      }
    });
  });
});
