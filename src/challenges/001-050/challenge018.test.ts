import { challenge018 } from './challenge018';

describe('Challenge 018: 基数変換', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('3つの基数変換結果が出力されること', () => {
    challenge018();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
  });

  test('すべて文字列が出力されること', () => {
    challenge018();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (!value.toString().includes(':')) {
        expect(typeof value).toBe('string');
      }
    });
  });
});
