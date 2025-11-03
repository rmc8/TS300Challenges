import { challenge091 } from './challenge091';

describe('Challenge 091: コールバック関数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('コールバック関数が実行されること', () => {
    challenge091();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Processing... Done!
  });
});
