import { challenge146 } from './challenge146';

describe('Challenge 146: Enum の基礎', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Enumで名前付き定数の集合を定義できること', () => {
    challenge146();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 0, Sunday
  });
});
