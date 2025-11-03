import { challenge274 } from './challenge274';

describe('Challenge 274: Observer Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Observer Patternを型安全に実装できること', () => {
    challenge274();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
