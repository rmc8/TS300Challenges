import { challenge024 } from './challenge024';

describe('Challenge 024: 文字列の空白削除', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('3つの削除結果が出力されること', () => {
    challenge024();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
  });

  test('すべて文字列が出力されること', () => {
    challenge024();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (!value.toString().includes(':')) {
        expect(typeof value).toBe('string');
      }
    });
  });
});
