import { challenge007 } from './challenge007';

describe('Challenge 007: any型とunknown型の違い', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数が正常に実行されること', () => {
    expect(() => challenge007()).not.toThrow();
  });

  test('何らかの出力があること', () => {
    challenge007();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
