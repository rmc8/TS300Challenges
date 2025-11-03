import { challenge137 } from './challenge137';

describe('Challenge 137: クラス式', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('クラス式を使って変数にクラスを代入できること', () => {
    challenge137();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Hello from class expression
  });
});
