import { challenge188 } from './challenge188';

describe('Challenge 188: Uppercase<S>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Uppercase<S>で文字列リテラル型を大文字に変換できること', () => {
    challenge188();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: HELLO
  });
});
