import { challenge131 } from './challenge131';

describe('Challenge 131: super キーワード', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('superキーワードで基底クラスのコンストラクタを呼び出せること', () => {
    challenge131();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Pochi is a Dog
  });
});
