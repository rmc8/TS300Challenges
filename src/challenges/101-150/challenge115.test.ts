import { challenge115 } from './challenge115';

describe('Challenge 115: ユニオン型の型ガード', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ユニオン型の値を型ガードで絞り込めること', () => {
    challenge115();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42, HELLO
  });
});
