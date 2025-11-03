import { challenge167 } from './challenge167';

describe('Challenge 167: ジェネリックな型エイリアス', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ジェネリックな型エイリアスを定義できること', () => {
    challenge167();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { value: 42 }
  });
});
