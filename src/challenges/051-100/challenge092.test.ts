import { challenge092 } from './challenge092';

describe('Challenge 092: 高階関数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数を返す高階関数が実行されること', () => {
    challenge092();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 15
  });
});
