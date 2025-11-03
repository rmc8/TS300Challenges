import { challenge005 } from './challenge005';

describe('Challenge 005: boolean型の使用', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('trueが出力されること', () => {
    challenge005();
    expect(consoleSpy).toHaveBeenCalledWith(true);
  });

  test('出力される値がboolean型であること', () => {
    challenge005();
    const calledValue = consoleSpy.mock.calls[0][0];
    expect(typeof calledValue).toBe('boolean');
  });
});
