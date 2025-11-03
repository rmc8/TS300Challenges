import { challenge130 } from './challenge130';

describe('Challenge 130: メソッドのオーバーライド', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('継承したクラスのメソッドをオーバーライドできること', () => {
    challenge130();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Dog makes a sound: Woof!
  });
});
