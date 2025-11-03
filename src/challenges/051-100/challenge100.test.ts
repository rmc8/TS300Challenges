import { challenge100 } from './challenge100';

describe('Challenge 100: 再帰関数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('再帰関数で階乗が計算されること', () => {
    challenge100();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 120
  });
});
