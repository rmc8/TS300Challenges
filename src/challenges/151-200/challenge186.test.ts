import { challenge186 } from './challenge186';

describe('Challenge 186: ThisType<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ThisType<T>でオブジェクトリテラルのthis型を指定できること', () => {
    challenge186();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42
  });
});
