import { challenge123 } from './challenge123';

describe('Challenge 123: プロパティの定義', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('クラスプロパティを定義できること', () => {
    challenge123();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Counter { count: 0 }
  });
});
