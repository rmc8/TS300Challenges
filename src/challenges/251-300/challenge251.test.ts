import { challenge251 } from './challenge251';

describe('Challenge 251: Branded Types', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Branded Typesで型安全な値の区別を実装できること', () => {
    challenge251();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
