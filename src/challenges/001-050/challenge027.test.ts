import { challenge027 } from './challenge027';

describe('Challenge 027: 文字列の開始・終了判定', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('2つの判定結果が出力されること', () => {
    challenge027();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  test('boolean値が出力されること', () => {
    challenge027();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (!value.toString().includes(':')) {
        expect(typeof value).toBe('boolean');
      }
    });
  });
});
