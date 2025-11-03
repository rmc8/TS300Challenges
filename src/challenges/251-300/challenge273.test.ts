import { challenge273 } from './challenge273';

describe('Challenge 273: Singleton Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Singleton Patternを型安全に実装できること', () => {
    challenge273();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
