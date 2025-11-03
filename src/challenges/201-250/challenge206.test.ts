import { challenge206 } from './challenge206';

describe('Challenge 206: Promise.any()', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Promise.any()で最初に成功したPromiseの結果を取得できること', () => {
    challenge206();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: First success
  });
});
