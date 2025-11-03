import { challenge032 } from './challenge032';

describe('Challenge 032: 年齢判定', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('年齢判定結果が出力されること', () => {
    challenge032();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(['成人です', '未成年です']).toContain(output);
  });
});
