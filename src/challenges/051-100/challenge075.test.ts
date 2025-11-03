import { challenge075 } from './challenge075';

describe('Challenge 075: スプレッド構文でのオブジェクトのコピー', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('スプレッド構文でマージされたオブジェクトが出力されること', () => {
    challenge075();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', age: 25, city: 'Tokyo' }
  });
});
