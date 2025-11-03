import { challenge026 } from './challenge026';

describe('Challenge 026: 文字列の分割', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('配列が出力されること', () => {
    challenge026();
    const output = consoleSpy.mock.calls[0][0];
    expect(Array.isArray(output)).toBe(true);
  });

  test('配列に要素が含まれていること', () => {
    challenge026();
    const output = consoleSpy.mock.calls[0][0];
    expect(output.length).toBeGreaterThan(0);
  });
});
