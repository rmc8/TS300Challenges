import { challenge033 } from './challenge033';

describe('Challenge 033: 成績判定', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('成績が出力されること', () => {
    challenge033();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(['A', 'B', 'C', 'D', 'F']).toContain(output);
  });
});
