import { challenge244 } from './challenge244';

describe('Challenge 244: declare module によるグローバル拡張', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('declare moduleで既存のモジュールを拡張できること', () => {
    challenge244();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
