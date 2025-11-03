import { challenge280 } from './challenge280';

describe('Challenge 280: Chain of Responsibility Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Chain of Responsibility Patternを型安全に実装できること', () => {
    challenge280();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
