import { challenge073 } from './challenge073';

describe('Challenge 073: thisの使用', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('thisを使ってプロパティにアクセスするメソッドが呼び出されること', () => {
    challenge073();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Taro is 25 years old
  });
});
