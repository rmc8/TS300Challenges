import { challenge093 } from './challenge093';

describe('Challenge 093: クロージャ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('クロージャで状態を保持する関数が実行されること', () => {
    challenge093();
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    // 期待される出力例: 1, 2, 3
  });
});
