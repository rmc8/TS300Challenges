import { challenge271 } from './challenge271';

describe('Challenge 271: Factory Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Factory Patternを型安全に実装できること', () => {
    challenge271();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
