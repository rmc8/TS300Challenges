import { challenge209 } from './challenge209';

describe('Challenge 209: 非同期イテレータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('非同期イテレータで非同期にデータを取得できること', () => {
    challenge209();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 1, 2, 3
  });
});
