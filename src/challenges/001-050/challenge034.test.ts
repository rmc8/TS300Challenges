import { challenge034 } from './challenge034';

describe('Challenge 034: 曜日の判定', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('曜日名が出力されること', () => {
    challenge034();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    const validDays = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '無効な値'];
    expect(validDays).toContain(output);
  });
});
