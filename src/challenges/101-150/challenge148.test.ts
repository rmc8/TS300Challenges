import { challenge148 } from './challenge148';

describe('Challenge 148: 文字列 Enum', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('文字列Enumで文字列値を持つ列挙型を定義できること', () => {
    challenge148();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: red
  });
});
