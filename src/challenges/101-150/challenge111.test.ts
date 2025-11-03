import { challenge111 } from './challenge111';

describe('Challenge 111: 文字列リテラル型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('文字列リテラル型で特定の文字列のみを受け入れること', () => {
    challenge111();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: red
  });
});
