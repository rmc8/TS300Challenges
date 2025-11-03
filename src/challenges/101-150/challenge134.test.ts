import { challenge134 } from './challenge134';

describe('Challenge 134: インターフェースの実装（implements）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('implementsキーワードでインターフェースを実装できること', () => {
    challenge134();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Pochi says Woof!
  });
});
