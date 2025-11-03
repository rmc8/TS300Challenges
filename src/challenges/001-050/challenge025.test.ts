import { challenge025 } from './challenge025';

describe('Challenge 025: 文字列の置換', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('2つの置換結果が出力されること', () => {
    challenge025();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  test('すべて文字列が出力されること', () => {
    challenge025();
    consoleSpy.mock.calls.forEach((call) => {
      const value = call[0];
      if (!value.toString().includes(':')) {
        expect(typeof value).toBe('string');
      }
    });
  });
});
