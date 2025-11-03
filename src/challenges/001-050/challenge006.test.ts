import { challenge006 } from './challenge006';

describe('Challenge 006: const と let の違い', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数が正常に実行されること', () => {
    expect(() => challenge006()).not.toThrow();
  });

  test('何らかの出力があること', () => {
    challenge006();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
