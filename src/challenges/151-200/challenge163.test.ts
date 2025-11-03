import { challenge163 } from './challenge163';

describe('Challenge 163: インデックス型アクセス（T[K]）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('インデックス型アクセスでプロパティの型を取得できること', () => {
    challenge163();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Taro
  });
});
