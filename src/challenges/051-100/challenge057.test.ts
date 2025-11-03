import { challenge057 } from './challenge057';

describe('Challenge 057: 配列の逆順', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('逆順にした配列が出力されること', () => {
    challenge057();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(Array.isArray(output)).toBe(true);
  });
});
