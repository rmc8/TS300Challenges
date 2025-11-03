import { challenge256 } from './challenge256';

describe('Challenge 256: Builder Pattern 型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Builder Patternの型安全な実装を作成できること', () => {
    challenge256();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
