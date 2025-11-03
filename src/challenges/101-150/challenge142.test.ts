import { challenge142 } from './challenge142';

describe('Challenge 142: タプルの要素アクセス', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('タプルの各要素にインデックスでアクセスできること', () => {
    challenge142();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: Taro, 25
  });
});
