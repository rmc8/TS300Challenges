import { challenge192 } from './challenge192';

describe('Challenge 192: infer キーワード', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('inferキーワードで型を推論できること', () => {
    challenge192();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: number
  });
});
