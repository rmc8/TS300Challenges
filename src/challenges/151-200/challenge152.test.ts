import { challenge152 } from './challenge152';

describe('Challenge 152: ジェネリック型パラメータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリック型パラメータで配列の最初の要素を取得できること', () => {
    challenge152();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: 1, apple
  });
});
