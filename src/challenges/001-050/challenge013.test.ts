import { challenge013 } from './challenge013';

describe('Challenge 013: 数値の平方根', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('平方根の結果が出力されること', () => {
    challenge013();
    const output = consoleSpy.mock.calls[0][0];
    expect(typeof output).toBe('number');
    expect(output).toBeGreaterThan(0);
  });
});
