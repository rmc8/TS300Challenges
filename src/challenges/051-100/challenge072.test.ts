import { challenge072 } from './challenge072';

describe('Challenge 072: オブジェクトメソッド', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('メソッドを持つオブジェクトからメソッドが呼び出されること', () => {
    challenge072();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Hello, Taro!
  });
});
