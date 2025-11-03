import { challenge190 } from './challenge190';

describe('Challenge 190: Capitalize<S>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Capitalize<S>で文字列リテラル型の先頭を大文字に変換できること', () => {
    challenge190();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Hello
  });
});
