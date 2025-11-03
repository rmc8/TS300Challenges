import { challenge272 } from './challenge272';

describe('Challenge 272: Abstract Factory Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Abstract Factory Patternを型安全に実装できること', () => {
    challenge272();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
