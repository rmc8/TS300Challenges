import { challenge159 } from './challenge159';

describe('Challenge 159: Promise<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Promise<T>で非同期処理の型を定義できること', () => {
    challenge159();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42
  });
});
