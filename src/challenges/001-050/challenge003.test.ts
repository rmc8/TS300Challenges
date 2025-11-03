import { challenge003 } from './challenge003';

describe('Challenge 003: テンプレートリテラルの使用', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('「私の名前は」で始まる文字列が出力されること', () => {
    challenge003();
    const output = consoleSpy.mock.calls[0][0];
    expect(output).toMatch(/^私の名前は/);
  });

  test('「です」で終わる文字列が出力されること', () => {
    challenge003();
    const output = consoleSpy.mock.calls[0][0];
    expect(output).toMatch(/です$/);
  });

  test('出力される値がstring型であること', () => {
    challenge003();
    const calledValue = consoleSpy.mock.calls[0][0];
    expect(typeof calledValue).toBe('string');
  });
});
