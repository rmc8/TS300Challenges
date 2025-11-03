import { challenge097 } from './challenge097';

describe('Challenge 097: メソッドチェーン', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('メソッドチェーンで計算が実行されること', () => {
    challenge097();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 8
  });
});
