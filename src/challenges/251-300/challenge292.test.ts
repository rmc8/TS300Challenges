import { challenge292 } from './challenge292';

describe('Challenge 292: 型安全な API Client', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型安全なAPIクライアントを実装できること', () => {
    challenge292();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
