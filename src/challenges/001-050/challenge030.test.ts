import { challenge030 } from './challenge030';

describe('Challenge 030: 複雑なテンプレートリテラル', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('フォーマットされた文字列が出力されること', () => {
    challenge030();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('出力に改行が含まれていること（複数行）', () => {
    challenge030();
    const output = consoleSpy.mock.calls[0][0];
    expect(output.toString()).toContain('\n');
  });
});
