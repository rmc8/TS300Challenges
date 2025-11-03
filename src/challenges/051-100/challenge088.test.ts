import { challenge088 } from './challenge088';

describe('Challenge 088: void型の関数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('void型の関数が呼び出されること', () => {
    challenge088();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Logging...
  });
});
