import { challenge085 } from './challenge085';

describe('Challenge 085: デフォルトパラメータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('デフォルトパラメータを持つ関数が呼び出されること', () => {
    challenge085();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: Hello, Guest! と Hello, Taro!
  });
});
