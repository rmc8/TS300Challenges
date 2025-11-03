import { challenge029 } from './challenge029';

describe('Challenge 029: 文字の出現回数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('出現回数が数値で出力されること', () => {
    challenge029();
    const output = consoleSpy.mock.calls[0][0];
    expect(typeof output).toBe('number');
    expect(output).toBeGreaterThanOrEqual(0);
  });
});
