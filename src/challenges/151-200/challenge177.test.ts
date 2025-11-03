import { challenge177 } from './challenge177';

describe('Challenge 177: Exclude<T, U>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Exclude<T, U>でユニオン型から特定の型を除外できること', () => {
    challenge177();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: b
  });
});
