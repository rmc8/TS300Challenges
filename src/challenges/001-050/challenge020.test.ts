import { challenge020 } from './challenge020';

describe('Challenge 020: 絶対値と最大値・最小値', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('3つの値が出力されること', () => {
    challenge020();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
  });

  test('すべて数値が出力されること', () => {
    challenge020();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (typeof value !== 'string') {
        expect(typeof value).toBe('number');
      }
    });
  });

  test('絶対値は0以上であること', () => {
    challenge020();
    const firstValue = consoleSpy.mock.calls[0][0];
    if (typeof firstValue === 'number') {
      expect(firstValue).toBeGreaterThanOrEqual(0);
    }
  });
});
