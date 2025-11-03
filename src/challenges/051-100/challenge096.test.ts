import { challenge096 } from './challenge096';

describe('Challenge 096: 関数のカリー化', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('カリー化された関数が実行されること', () => {
    challenge096();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 10
  });
});
