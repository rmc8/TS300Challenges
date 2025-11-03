import { challenge143 } from './challenge143';

describe('Challenge 143: 可変長タプル', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('rest要素を使って可変長のタプル型を定義できること', () => {
    challenge143();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: ['Taro', 25, 'Tokyo', 'Engineer']
  });
});
