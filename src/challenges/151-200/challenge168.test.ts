import { challenge168 } from './challenge168';

describe('Challenge 168: 条件付きジェネリクス', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('条件に基づいてジェネリック型を変更できること', () => {
    challenge168();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: 42, Hello
  });
});
