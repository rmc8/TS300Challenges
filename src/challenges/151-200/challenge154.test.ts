import { challenge154 } from './challenge154';

describe('Challenge 154: ジェネリックインターフェース', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリックインターフェースを定義できること', () => {
    challenge154();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { value: 42 }
  });
});
