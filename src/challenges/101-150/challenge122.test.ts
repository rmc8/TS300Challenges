import { challenge122 } from './challenge122';

describe('Challenge 122: コンストラクタ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('コンストラクタでインスタンスを初期化できること', () => {
    challenge122();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Person { name: 'Taro', age: 25 }
  });
});
