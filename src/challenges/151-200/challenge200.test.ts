import { challenge200 } from './challenge200';

describe('Challenge 200: カスタムユーティリティ型の作成', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('カスタムユーティリティ型を作成できること', () => {
    challenge200();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: string, age: number }
  });
});
