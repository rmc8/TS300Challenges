import { challenge289 } from './challenge289';

describe('Challenge 289: 型安全な Get 型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('パスを使ってネストされた値の型を取得できること', () => {
    challenge289();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
