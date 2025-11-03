import { challenge275 } from './challenge275';

describe('Challenge 275: Strategy Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Strategy Patternを型安全に実装できること', () => {
    challenge275();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
