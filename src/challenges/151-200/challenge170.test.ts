import { challenge170 } from './challenge170';

describe('Challenge 170: ジェネリックな戻り値', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリックな戻り値の型を持つ関数を定義できること', () => {
    challenge170();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { data: 42, timestamp: 1234567890 }
  });
});
