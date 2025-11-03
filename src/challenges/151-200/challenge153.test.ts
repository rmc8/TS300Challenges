import { challenge153 } from './challenge153';

describe('Challenge 153: ジェネリッククラス', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリッククラスで任意の型を保持できること', () => {
    challenge153();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: 42, Hello
  });
});
