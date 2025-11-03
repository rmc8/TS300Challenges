import { challenge166 } from './challenge166';

describe('Challenge 166: タプルとジェネリクス', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリクスでタプルを操作する関数を定義できること', () => {
    challenge166();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [1, 'hello']
  });
});
