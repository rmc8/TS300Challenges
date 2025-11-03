import { challenge124 } from './challenge124';

describe('Challenge 124: メソッドの定義', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('クラスメソッドを定義して呼び出せること', () => {
    challenge124();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Hello, Taro!
  });
});
