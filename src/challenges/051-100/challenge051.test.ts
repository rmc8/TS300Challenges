import { challenge051 } from './challenge051';

describe('Challenge 051: 配列の作成と出力', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('配列が出力されること', () => {
    challenge051();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(Array.isArray(output)).toBe(true);
  });
});
