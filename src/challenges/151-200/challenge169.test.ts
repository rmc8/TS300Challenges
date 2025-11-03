import { challenge169 } from './challenge169';

describe('Challenge 169: 型推論とジェネリクス', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型推論を活用したジェネリック関数を定義できること', () => {
    challenge169();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [1, 2, 3]
  });
});
