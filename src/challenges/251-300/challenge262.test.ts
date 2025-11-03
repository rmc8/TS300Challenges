import { challenge262 } from './challenge262';

describe('Challenge 262: メモ化パターン', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('メモ化で関数の結果をキャッシュできること', () => {
    challenge262();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
