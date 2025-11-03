import { challenge002 } from './challenge002';

describe('Challenge 002: number型変数の宣言と出力', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('数値10が出力されること', () => {
    challenge002();
    expect(consoleSpy).toHaveBeenCalledWith(10);
  });

  test('出力される値がnumber型であること', () => {
    challenge002();
    const calledValue = consoleSpy.mock.calls[0][0];
    expect(typeof calledValue).toBe('number');
  });
});
