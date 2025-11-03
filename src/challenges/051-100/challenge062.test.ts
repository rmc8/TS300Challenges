import { challenge062 } from './challenge062';

describe('Challenge 062: filter()で配列のフィルタリング', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('filter()を使って偶数のみを抽出した配列が出力されること', () => {
    challenge062();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [2, 4, 6, 8, 10]
  });
});
