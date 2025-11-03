import { challenge023 } from './challenge023';

describe('Challenge 023: 文字列の大文字・小文字変換', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('2つの変換結果が出力されること', () => {
    challenge023();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  test('すべて文字列が出力されること', () => {
    challenge023();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (!value.toString().includes(':')) {
        expect(typeof value).toBe('string');
      }
    });
  });
});
