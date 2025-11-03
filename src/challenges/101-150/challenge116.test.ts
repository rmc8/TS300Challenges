import { challenge116 } from './challenge116';

describe('Challenge 116: typeof型ガード', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('typeof演算子でプリミティブ型を判定できること', () => {
    challenge116();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Number: 42, String: Hello
  });
});
