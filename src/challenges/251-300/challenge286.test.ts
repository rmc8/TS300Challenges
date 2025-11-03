import { challenge286 } from './challenge286';

describe('Challenge 286: Recursive Conditional Types', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('再帰的なConditional Typesで複雑な型変換を実装できること', () => {
    challenge286();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
