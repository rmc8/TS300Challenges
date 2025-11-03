import { challenge009 } from './challenge009';

describe('Challenge 009: void型を返す関数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数の戻り値がundefinedであること', () => {
    const result = challenge009();
    expect(result).toBeUndefined();
  });

  test('何らかの出力があること', () => {
    challenge009();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
