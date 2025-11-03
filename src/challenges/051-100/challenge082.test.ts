import { challenge082 } from './challenge082';

describe('Challenge 082: 関数式', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数式で定義した関数が呼び出されること', () => {
    challenge082();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 10
  });
});
