import { challenge031 } from './challenge031';

describe('Challenge 031: 正負0の判定', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('判定結果が出力されること', () => {
    challenge031();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(['正の数', '負の数', '0']).toContain(output);
  });
});
