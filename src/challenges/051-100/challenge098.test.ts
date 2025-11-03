import { challenge098 } from './challenge098';

describe('Challenge 098: 関数の合成', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数の合成で計算が実行されること', () => {
    challenge098();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 14
  });
});
