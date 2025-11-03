import { challenge067 } from './challenge067';

describe('Challenge 067: プロパティのアクセス', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ドット記法とブラケット記法でプロパティにアクセスできること', () => {
    challenge067();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: Taro, 25
  });
});
