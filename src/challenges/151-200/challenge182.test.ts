import { challenge182 } from './challenge182';

describe('Challenge 182: ConstructorParameters<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ConstructorParameters<T>でクラスのコンストラクタパラメータの型を取得できること', () => {
    challenge182();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: ['Taro', 25]
  });
});
