import { challenge015 } from './challenge015';

describe('Challenge 015: インクリメント・デクリメント演算子', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数の値が出力されること', () => {
    challenge015();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
  });

  test('すべて数値が出力されること', () => {
    challenge015();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (typeof value !== 'string') {
        expect(typeof value).toBe('number');
      }
    });
  });
});
