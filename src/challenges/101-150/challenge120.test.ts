import { challenge120 } from './challenge120';

describe('Challenge 120: 網羅性チェック（Exhaustiveness Checking）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('網羅性チェックですべてのケースを処理していることを確認できること', () => {
    challenge120();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Color is red
  });
});
