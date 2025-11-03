import { challenge037 } from './challenge037';

describe('Challenge 037: 範囲判定', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('範囲判定結果が出力されること', () => {
    challenge037();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(['範囲内です', '範囲外です']).toContain(output);
  });
});
