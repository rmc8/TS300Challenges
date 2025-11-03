import { challenge074 } from './challenge074';

describe('Challenge 074: オブジェクトの分割代入', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('分割代入で取り出したプロパティが出力されること', () => {
    challenge074();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: Taro, 25
  });
});
