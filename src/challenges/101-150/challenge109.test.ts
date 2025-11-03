import { challenge109 } from './challenge109';

describe('Challenge 109: as const', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('as const でリテラル型として推論されること', () => {
    challenge109();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: readonly ['apple', 'banana', 'orange']
  });
});
