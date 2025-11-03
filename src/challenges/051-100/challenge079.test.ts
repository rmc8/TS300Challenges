import { challenge079 } from './challenge079';

describe('Challenge 079: in演算子', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('in演算子でプロパティの存在確認結果が出力されること', () => {
    challenge079();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: true, false
  });
});
