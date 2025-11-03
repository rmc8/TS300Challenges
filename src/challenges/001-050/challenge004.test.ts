import { challenge004 } from './challenge004';

describe('Challenge 004: 2つの数値の和を計算', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('数値の和が出力されること', () => {
    challenge004();
    const output = consoleSpy.mock.calls[0][0];
    expect(typeof output).toBe('number');
  });

  test('出力される値が0より大きいこと（正の数の和）', () => {
    challenge004();
    const output = consoleSpy.mock.calls[0][0];
    expect(output).toBeGreaterThan(0);
  });
});
