import { challenge118 } from './challenge118';

describe('Challenge 118: カスタム型ガード', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('カスタム型ガード関数で型を絞り込めること', () => {
    challenge118();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42
  });
});
