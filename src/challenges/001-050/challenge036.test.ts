import { challenge036 } from './challenge036';

describe('Challenge 036: 三項演算子で最大値選択', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('最大値が数値で出力されること', () => {
    challenge036();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(typeof output).toBe('number');
  });
});
