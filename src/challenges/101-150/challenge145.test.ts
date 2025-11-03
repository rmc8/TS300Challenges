import { challenge145 } from './challenge145';

describe('Challenge 145: readonly タプル', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('readonly修飾子で不変のタプルを定義できること', () => {
    challenge145();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: ['Tokyo', 139.6917, 35.6895]
  });
});
