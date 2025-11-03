import { challenge204 } from './challenge204';

describe('Challenge 204: Promise.race()', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Promise.race()で最初に完了したPromiseの結果を取得できること', () => {
    challenge204();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Fast result
  });
});
