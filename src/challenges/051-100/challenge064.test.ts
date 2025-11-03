import { challenge064 } from './challenge064';

describe('Challenge 064: every()で全要素チェック', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('every()を使って全要素が条件を満たすかチェックした結果が出力されること', () => {
    challenge064();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: true または false
  });
});
