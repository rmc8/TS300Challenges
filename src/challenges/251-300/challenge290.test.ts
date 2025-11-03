import { challenge290 } from './challenge290';

describe('Challenge 290: 型安全な Set 型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('パスを使ってネストされた値を型安全に更新できること', () => {
    challenge290();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
