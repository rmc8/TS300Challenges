import { challenge114 } from './challenge114';

describe('Challenge 114: テンプレートリテラル型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('テンプレートリテラル型でパターンに基づいた文字列型を定義できること', () => {
    challenge114();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: user_123
  });
});
