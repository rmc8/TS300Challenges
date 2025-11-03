import { challenge138 } from './challenge138';

describe('Challenge 138: thisの型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('メソッドチェーンでthisの型を適切に扱えること', () => {
    challenge138();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { value: 15 }
  });
});
