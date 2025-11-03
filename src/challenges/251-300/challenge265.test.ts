import { challenge265 } from './challenge265';

describe('Challenge 265: Tree Shaking の最適化', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Tree Shakingに適したコードを書けること', () => {
    challenge265();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
