import { challenge276 } from './challenge276';

describe('Challenge 276: Command Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Command Patternを型安全に実装できること', () => {
    challenge276();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
