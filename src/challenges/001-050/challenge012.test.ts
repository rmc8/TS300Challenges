import { challenge012 } from './challenge012';

describe('Challenge 012: 数値の2乗', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('2乗の結果が出力されること', () => {
    challenge012();
    const output = consoleSpy.mock.calls[0][0];
    expect(typeof output).toBe('number');
    expect(output).toBeGreaterThan(0);
  });
});
