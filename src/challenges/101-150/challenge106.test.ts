import { challenge106 } from './challenge106';

describe('Challenge 106: ユニオン型の基礎', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ユニオン型で複数の型を受け入れること', () => {
    challenge106();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: 42, Hello
  });
});
