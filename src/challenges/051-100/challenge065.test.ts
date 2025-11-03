import { challenge065 } from './challenge065';

describe('Challenge 065: ReadonlyArray<T>の使用', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ReadonlyArray<T>またはreadonly T[]型の配列が出力されること', () => {
    challenge065();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [1, 2, 3, 4, 5]
  });
});
