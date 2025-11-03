import { challenge151 } from './challenge151';

describe('Challenge 151: ジェネリック関数の基礎', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリック関数で任意の型を受け取れること', () => {
    challenge151();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: 42, Hello
  });
});
