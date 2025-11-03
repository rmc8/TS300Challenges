import { challenge121 } from './challenge121';

describe('Challenge 121: クラスの宣言', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('クラスを宣言してインスタンスを作成できること', () => {
    challenge121();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Person { name: 'Taro' }
  });
});
