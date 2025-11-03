import { challenge155 } from './challenge155';

describe('Challenge 155: 複数の型パラメータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数の型パラメータを持つジェネリック関数を定義できること', () => {
    challenge155();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: ['name', 42]
  });
});
