import { challenge258 } from './challenge258';

describe('Challenge 258: 型安全な状態遷移', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型を使って状態遷移を安全に管理できること', () => {
    challenge258();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
