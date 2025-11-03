import { challenge257 } from './challenge257';

describe('Challenge 257: Fluent API 型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Fluent APIの型安全な実装を作成できること', () => {
    challenge257();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
