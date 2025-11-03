import { challenge161 } from './challenge161';

describe('Challenge 161: keyof制約', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('keyofでオブジェクトのキーに制約を付けられること', () => {
    challenge161();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Taro
  });
});
