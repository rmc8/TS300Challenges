import { challenge189 } from './challenge189';

describe('Challenge 189: Lowercase<S>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Lowercase<S>で文字列リテラル型を小文字に変換できること', () => {
    challenge189();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: hello
  });
});
