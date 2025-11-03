import { challenge277 } from './challenge277';

describe('Challenge 277: Adapter Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Adapter Patternを型安全に実装できること', () => {
    challenge277();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
