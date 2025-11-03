import { challenge195 } from './challenge195';

describe('Challenge 195: +/-修飾子', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Mapped Typesで+/-修飾子を使って修飾子を追加・削除できること', () => {
    challenge195();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: string, age: number }
  });
});
