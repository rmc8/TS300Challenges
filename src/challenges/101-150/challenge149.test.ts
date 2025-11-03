import { challenge149 } from './challenge149';

describe('Challenge 149: const Enum', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('const enumでコンパイル時にインライン化される列挙型を定義できること', () => {
    challenge149();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 0
  });
});
