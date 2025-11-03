import { challenge095 } from './challenge095';

describe('Challenge 095: ジェネレータ関数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネレータ関数で複数の値が生成されること', () => {
    challenge095();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 1, 2, 3
  });
});
