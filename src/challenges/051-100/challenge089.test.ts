import { challenge089 } from './challenge089';

describe('Challenge 089: 関数のオーバーロード', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数のオーバーロードで異なる型の引数を処理できること', () => {
    challenge089();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: 10 と Hello World
  });
});
