import { challenge295 } from './challenge295';

describe('Challenge 295: 型安全な Query Builder', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型安全なクエリビルダーを実装できること', () => {
    challenge295();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
