import { challenge102 } from './challenge102';

describe('Challenge 102: unknown型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('unknown型の値を型ガードで安全に扱えること', () => {
    challenge102();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42
  });
});
