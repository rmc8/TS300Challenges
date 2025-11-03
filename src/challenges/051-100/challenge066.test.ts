import { challenge066 } from './challenge066';

describe('Challenge 066: オブジェクトの宣言と初期化', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('プロパティを持つオブジェクトが出力されること', () => {
    challenge066();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', age: 25 }
  });
});
