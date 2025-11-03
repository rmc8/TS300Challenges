import { challenge049 } from './challenge049';

describe('Challenge 049: フィボナッチ数列', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('フィボナッチ数列の配列が出力されること', () => {
    challenge049();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(Array.isArray(output)).toBe(true);
    expect(output.length).toBe(10);
  });
});
