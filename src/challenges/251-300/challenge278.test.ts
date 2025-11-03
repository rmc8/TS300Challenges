import { challenge278 } from './challenge278';

describe('Challenge 278: Proxy Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Proxy Patternを型安全に実装できること', () => {
    challenge278();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
