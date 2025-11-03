import { challenge021 } from './challenge021';

describe('Challenge 021: 文字列の連結', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('2つの連結結果が出力されること', () => {
    challenge021();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  test('すべて文字列が出力されること', () => {
    challenge021();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (!value.toString().includes(':')) {
        expect(typeof value).toBe('string');
      }
    });
  });
});
