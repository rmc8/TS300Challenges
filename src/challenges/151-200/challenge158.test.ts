import { challenge158 } from './challenge158';

describe('Challenge 158: ジェネリック配列', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリック配列を操作する関数を定義できること', () => {
    challenge158();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [1, 2, 3, 1, 2, 3]
  });
});
