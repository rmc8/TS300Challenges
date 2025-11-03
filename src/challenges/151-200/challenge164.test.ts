import { challenge164 } from './challenge164';

describe('Challenge 164: ジェネリックな関数型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリックな関数型を定義できること', () => {
    challenge164();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42
  });
});
