import { challenge087 } from './challenge087';

describe('Challenge 087: 関数の戻り値', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('明示的な戻り値の型を持つ関数が呼び出されること', () => {
    challenge087();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 15
  });
});
