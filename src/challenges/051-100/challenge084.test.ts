import { challenge084 } from './challenge084';

describe('Challenge 084: パラメータと引数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数のパラメータを受け取る関数が呼び出されること', () => {
    challenge084();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Taro is 25 years old
  });
});
