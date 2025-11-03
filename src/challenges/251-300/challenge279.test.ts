import { challenge279 } from './challenge279';

describe('Challenge 279: Composite Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Composite Patternを型安全に実装できること', () => {
    challenge279();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
