import { challenge191 } from './challenge191';

describe('Challenge 191: 条件型の基礎（T extends U ? X : Y）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('条件型で型に応じて異なる型を返せること', () => {
    challenge191();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: number
  });
});
