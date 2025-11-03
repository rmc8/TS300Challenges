import { challenge165 } from './challenge165';

describe('Challenge 165: ジェネリックなコールバック', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリックなコールバック関数を定義できること', () => {
    challenge165();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [2, 4, 6]
  });
});
