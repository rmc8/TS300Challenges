import { challenge208 } from './challenge208';

describe('Challenge 208: 非同期関数の型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('非同期関数の型を正しく定義できること', () => {
    challenge208();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42
  });
});
