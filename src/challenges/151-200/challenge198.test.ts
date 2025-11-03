import { challenge198 } from './challenge198';

describe('Challenge 198: Recursive Conditional Types', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('再帰的な条件型でネストした型を処理できること', () => {
    challenge198();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 1 | 2 | 3 | 4
  });
});
