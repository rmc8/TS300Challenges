import { challenge147 } from './challenge147';

describe('Challenge 147: 数値 Enum', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('数値Enumでカスタムの数値を持つ列挙型を定義できること', () => {
    challenge147();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 200, OK
  });
});
