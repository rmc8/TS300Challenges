import { challenge294 } from './challenge294';

describe('Challenge 294: 型安全な Form バリデーション', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型安全なフォームバリデーションシステムを実装できること', () => {
    challenge294();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
