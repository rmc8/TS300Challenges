import { challenge105 } from './challenge105';

describe('Challenge 105: 型エイリアス', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型エイリアスで定義した型を使用できること', () => {
    challenge105();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Taro
  });
});
