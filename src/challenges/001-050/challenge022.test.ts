import { challenge022 } from './challenge022';

describe('Challenge 022: 文字列の長さ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('文字列の長さが数値で出力されること', () => {
    challenge022();
    const output = consoleSpy.mock.calls[0][0];
    expect(typeof output).toBe('number');
    expect(output).toBeGreaterThanOrEqual(0);
  });
});
