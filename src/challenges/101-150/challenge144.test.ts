import { challenge144 } from './challenge144';

describe('Challenge 144: ラベル付きタプル', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ラベル付きタプルで要素に名前を付けられること', () => {
    challenge144();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [10, 20]
  });
});
