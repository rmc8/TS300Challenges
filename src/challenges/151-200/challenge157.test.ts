import { challenge157 } from './challenge157';

describe('Challenge 157: デフォルト型パラメータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('デフォルト型パラメータで省略可能な型を定義できること', () => {
    challenge157();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Hello
  });
});
