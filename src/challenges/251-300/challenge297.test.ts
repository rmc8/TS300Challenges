import { challenge297 } from './challenge297';

describe('Challenge 297: 型安全な DI コンテナ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型安全な依存性注入コンテナを実装できること', () => {
    challenge297();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
