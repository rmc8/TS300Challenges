import { challenge133 } from './challenge133';

describe('Challenge 133: 抽象メソッド', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('抽象メソッドを定義し派生クラスで実装できること', () => {
    challenge133();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Area: 78.5
  });
});
