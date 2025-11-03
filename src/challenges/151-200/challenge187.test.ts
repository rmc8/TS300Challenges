import { challenge187 } from './challenge187';

describe('Challenge 187: Awaited<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Awaited<T>でPromiseの解決値の型を取得できること', () => {
    challenge187();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42
  });
});
