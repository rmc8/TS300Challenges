import { challenge081 } from './challenge081';

describe('Challenge 081: 関数の宣言', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数宣言で定義した関数が呼び出されること', () => {
    challenge081();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Hello!
  });
});
