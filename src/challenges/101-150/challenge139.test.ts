import { challenge139 } from './challenge139';

describe('Challenge 139: メソッドチェーン（クラス版）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('クラスでメソッドチェーンを実装できること', () => {
    challenge139();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: QueryBuilder: SELECT * FROM users WHERE age > 18
  });
});
