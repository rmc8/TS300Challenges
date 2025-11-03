import { challenge141 } from './challenge141';

describe('Challenge 141: タプル型の基礎', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('タプル型で固定長の配列を定義できること', () => {
    challenge141();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: ['Taro', 25]
  });
});
