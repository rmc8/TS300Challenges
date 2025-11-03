import { challenge234 } from './challenge234';

describe('Challenge 234: パラメータデコレータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('パラメータデコレータでパラメータにメタデータを追加できること', () => {
    challenge234();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
