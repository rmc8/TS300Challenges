import { challenge090 } from './challenge090';

describe('Challenge 090: 関数型（Function Types）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数型を使って定義した関数が呼び出されること', () => {
    challenge090();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 8
  });
});
