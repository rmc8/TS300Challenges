import { challenge281 } from './challenge281';

describe('Challenge 281: Variadic Tuple Types', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Variadic Tuple Typesで可変長の型安全なタプルを扱えること', () => {
    challenge281();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
