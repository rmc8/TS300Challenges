import { challenge101 } from './challenge101';

describe('Challenge 101: any型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('any型の変数に異なる型の値を代入できること', () => {
    challenge101();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: 42, Hello
  });
});
